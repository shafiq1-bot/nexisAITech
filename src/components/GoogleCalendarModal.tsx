import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  User, 
  Plus, 
  Trash2, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink, 
  Sparkles,
  LogOut,
  Mail
} from 'lucide-react';
import { 
  initAuth, 
  googleSignIn, 
  logoutGoogle, 
  fetchUpcomingCalendarEvents, 
  createCalendarEvent, 
  deleteCalendarEvent, 
  CalendarEvent 
} from '../lib/googleCalendar';
import { User as FirebaseUser } from 'firebase/auth';

interface GoogleCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAttendeeEmail?: string;
  initialMeetingSubject?: string;
}

export const GoogleCalendarModal: React.FC<GoogleCalendarModalProps> = ({
  isOpen,
  onClose,
  initialAttendeeEmail = '',
  initialMeetingSubject = 'Executive AI Advisory Briefing with Nexis AI',
}) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Calendar State
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // New Event Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [summary, setSummary] = useState(initialMeetingSubject);
  const [description, setDescription] = useState('Executive session covering AI Transformation, Zero Trust enclaves, and architecture strategy.');
  const [attendeeEmail, setAttendeeEmail] = useState(initialAttendeeEmail);
  const [startDate, setStartDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(14, 0, 0, 0);
    return tomorrow.toISOString().slice(0, 16);
  });
  const [durationMinutes, setDurationMinutes] = useState(30);
  const [addGoogleMeet, setAddGoogleMeet] = useState(true);
  const [creatingEvent, setCreatingEvent] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Delete Confirmation State (Mandatory per Skill instructions)
  const [eventToDelete, setEventToDelete] = useState<CalendarEvent | null>(null);
  const [deletingEvent, setDeletingEvent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const unsubscribe = initAuth(
      (currentUser, token) => {
        setUser(currentUser);
        setAccessToken(token);
        setLoadingAuth(false);
        loadCalendarEvents(token);
      },
      () => {
        setUser(null);
        setAccessToken(null);
        setLoadingAuth(false);
      }
    );

    return () => unsubscribe();
  }, [isOpen]);

  // Sync props when opening
  useEffect(() => {
    if (initialAttendeeEmail) setAttendeeEmail(initialAttendeeEmail);
    if (initialMeetingSubject) setSummary(initialMeetingSubject);
  }, [initialAttendeeEmail, initialMeetingSubject]);

  const loadCalendarEvents = async (token: string) => {
    setLoadingEvents(true);
    setErrorMsg(null);
    try {
      const calendarItems = await fetchUpcomingCalendarEvents(token);
      setEvents(calendarItems);
    } catch (err: any) {
      console.error('Error fetching events:', err);
      setErrorMsg(err.message || 'Could not load Google Calendar events. Access token may have expired.');
    } finally {
      setLoadingEvents(false);
    }
  };

  const handleSignIn = async () => {
    setLoadingAuth(true);
    setErrorMsg(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setAccessToken(res.accessToken);
        await loadCalendarEvents(res.accessToken);
      }
    } catch (err: any) {
      console.error('Sign-in error:', err);
      setErrorMsg(err.message || 'Failed to sign in with Google.');
    } finally {
      setLoadingAuth(false);
    }
  };

  const handleLogout = async () => {
    await logoutGoogle();
    setUser(null);
    setAccessToken(null);
    setEvents([]);
  };

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessToken) return;

    setCreatingEvent(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const startIso = new Date(startDate).toISOString();
      const endIso = new Date(new Date(startDate).getTime() + durationMinutes * 60000).toISOString();

      const created = await createCalendarEvent(accessToken, {
        summary,
        description,
        startTimeIso: startIso,
        endTimeIso: endIso,
        attendeeEmails: attendeeEmail ? [attendeeEmail] : [],
        addGoogleMeet,
      });

      setSuccessMsg(`✅ Event "${created.summary}" scheduled successfully on Google Calendar!`);
      setShowAddForm(false);
      await loadCalendarEvents(accessToken);
    } catch (err: any) {
      console.error('Error creating event:', err);
      setErrorMsg(err.message || 'Failed to create event on Google Calendar.');
    } finally {
      setCreatingEvent(false);
    }
  };

  // Confirm and delete event
  const confirmDeleteEvent = async () => {
    if (!accessToken || !eventToDelete) return;

    setDeletingEvent(true);
    try {
      await deleteCalendarEvent(accessToken, eventToDelete.id);
      setSuccessMsg(`Event "${eventToDelete.summary}" removed from Google Calendar.`);
      setEventToDelete(null);
      await loadCalendarEvents(accessToken);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to delete calendar event.');
    } finally {
      setDeletingEvent(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-slate-100 p-6 sm:p-8 relative">
        
        {/* Header & Close */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Google Calendar Integration
              </h3>
              <p className="text-xs text-slate-400">
                Direct schedule synchronization for Nexis AI Executive Briefings & BD Meetings
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notifications */}
        {errorMsg && (
          <div className="mb-4 p-3.5 bg-rose-950/80 border border-rose-800 rounded-xl text-xs text-rose-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-4 p-3.5 bg-emerald-950/80 border border-emerald-800 rounded-xl text-xs text-emerald-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMsg}</span>
            </div>
            <button onClick={() => setSuccessMsg(null)} className="text-emerald-400 hover:text-white">✕</button>
          </div>
        )}

        {/* Auth View if not logged in */}
        {!user || !accessToken ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 flex items-center justify-center mx-auto shadow-inner">
              <CalendarIcon className="w-8 h-8" />
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <h4 className="text-lg font-bold text-white">Connect Your Google Calendar</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect your Google account to view upcoming executive briefings, schedule AI strategy calls, and automatically generate Google Meet video links for client leads with permission from the app's users.
              </p>
            </div>

            {/* Official Material Google Sign In Button */}
            <div className="flex justify-center pt-2">
              <button
                onClick={handleSignIn}
                disabled={loadingAuth}
                className="gsi-material-button bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs px-5 py-2.5 rounded-xl shadow-lg border border-slate-300 transition-all flex items-center gap-3 cursor-pointer"
              >
                <div className="gsi-material-button-icon">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  </svg>
                </div>
                <span className="gsi-material-button-contents font-sans font-bold">
                  {loadingAuth ? 'Signing in with Google...' : 'Sign in with Google'}
                </span>
              </button>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="space-y-6">
            {/* User Account Bar */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'User'} className="w-8 h-8 rounded-full border border-cyan-500/50" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold text-xs">
                    {user.email?.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <div className="text-xs font-bold text-white">{user.displayName || 'Connected Account'}</div>
                  <div className="text-[11px] font-mono text-cyan-400">{user.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => loadCalendarEvents(accessToken)}
                  className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-700 transition-all text-xs flex items-center gap-1 font-mono"
                  title="Refresh Events"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingEvents ? 'animate-spin text-cyan-400' : ''}`} />
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 bg-slate-900 hover:bg-slate-800 text-rose-400 rounded-xl border border-slate-700 transition-all text-xs flex items-center gap-1 font-mono"
                  title="Disconnect Calendar"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-cyan-400" />
                Upcoming Calendar Events ({events.length})
              </h4>

              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5"
              >
                {showAddForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                <span>{showAddForm ? 'Cancel Form' : 'Schedule New Briefing'}</span>
              </button>
            </div>

            {/* Add Event Form Drawer */}
            {showAddForm && (
              <form onSubmit={handleCreateEvent} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                  Create Google Calendar Event
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Event Title / Subject *</label>
                    <input
                      type="text"
                      required
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Start Date & Time *</label>
                      <input
                        type="datetime-local"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Duration</label>
                      <select
                        value={durationMinutes}
                        onChange={(e) => setDurationMinutes(Number(e.target.value))}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                      >
                        <option value={15}>15 Minutes (Discovery)</option>
                        <option value={30}>30 Minutes (Standard Advisory)</option>
                        <option value={60}>60 Minutes (Architecture Deep Dive)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Attendee Corporate Email</label>
                    <input
                      type="email"
                      value={attendeeEmail}
                      onChange={(e) => setAttendeeEmail(e.target.value)}
                      placeholder="client.executive@enterprise.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Agenda & Notes</label>
                    <textarea
                      rows={2}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200"
                    />
                  </div>

                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={addGoogleMeet}
                      onChange={(e) => setAddGoogleMeet(e.target.checked)}
                      className="rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-cyan-500"
                    />
                    <span>Automatically generate Google Meet video conference link</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={creatingEvent}
                  className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  {creatingEvent ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  <span>{creatingEvent ? 'Scheduling to Google Calendar...' : 'Confirm Schedule Event'}</span>
                </button>
              </form>
            )}

            {/* Event List */}
            {loadingEvents ? (
              <div className="p-8 text-center text-xs font-mono text-slate-400 space-y-2">
                <RefreshCw className="w-6 h-6 animate-spin text-cyan-400 mx-auto" />
                <span>Syncing with Google Calendar API...</span>
              </div>
            ) : events.length === 0 ? (
              <div className="p-8 bg-slate-950/60 border border-slate-800 rounded-2xl text-center space-y-2">
                <CalendarIcon className="w-8 h-8 text-slate-600 mx-auto" />
                <div className="text-xs font-bold text-slate-300">No Upcoming Calendar Events Found</div>
                <p className="text-[11px] text-slate-400">Click "Schedule New Briefing" above to add an event to your calendar.</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {events.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-slate-700 transition-all flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1.5 max-w-lg">
                      <div className="text-sm font-bold text-white">{evt.summary}</div>

                      <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1 text-cyan-300">
                          <Clock className="w-3.5 h-3.5" />
                          {new Date(evt.start.dateTime).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                        </span>

                        {evt.hangoutLink && (
                          <a
                            href={evt.hangoutLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1 text-emerald-400 hover:underline"
                          >
                            <Video className="w-3.5 h-3.5" />
                            <span>Join Google Meet</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      {evt.attendees && evt.attendees.length > 0 && (
                        <div className="text-[11px] text-slate-400 flex items-center gap-1">
                          <User className="w-3 h-3 text-slate-500" />
                          <span>Attendees: {evt.attendees.map((a) => a.email).join(', ')}</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => setEventToDelete(evt)}
                      className="p-2 text-slate-500 hover:text-rose-400 hover:bg-slate-900 rounded-lg transition-colors shrink-0"
                      title="Delete event"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Mandatory User Confirmation Dialog for Destructive Operations */}
        {eventToDelete && (
          <div className="fixed inset-0 z-60 bg-slate-950/90 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl">
              <div className="flex items-center gap-3 text-rose-400 border-b border-slate-800 pb-3">
                <AlertTriangle className="w-6 h-6" />
                <h4 className="text-base font-bold text-white">Confirm Event Removal</h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Are you sure you want to remove <strong className="text-white">"{eventToDelete.summary}"</strong> from your primary Google Calendar? This action cannot be undone.
              </p>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setEventToDelete(null)}
                  disabled={deletingEvent}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDeleteEvent}
                  disabled={deletingEvent}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                >
                  {deletingEvent ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                  <span>Confirm Delete</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
