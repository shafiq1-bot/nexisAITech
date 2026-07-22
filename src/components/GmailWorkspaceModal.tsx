import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  Send, 
  Inbox, 
  Key, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  LogOut, 
  HelpCircle, 
  Sparkles,
  ShieldCheck,
  UserCheck,
  Building2,
  FileText,
  Copy,
  ExternalLink
} from 'lucide-react';
import { googleSignIn, initAuth, logoutUser } from '../lib/firebaseAuth';
import { fetchGmailProfile, fetchGmailMessages, sendGmailMessage, GmailProfile, GmailMessageSummary } from '../lib/gmailApi';
import { User } from 'firebase/auth';

interface GmailWorkspaceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GmailWorkspaceModal: React.FC<GmailWorkspaceModalProps> = ({ isOpen, onClose }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [profile, setProfile] = useState<GmailProfile | null>(null);
  const [messages, setMessages] = useState<GmailMessageSummary[]>([]);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const [activeTab, setActiveTab] = useState<'inbox' | 'compose' | 'aliases'>('compose');

  // Compose state
  const [recipient, setRecipient] = useState('shafiqs1@gmail.com');
  const [selectedAlias, setSelectedAlias] = useState('info@nexistechgroup.com');
  const [subject, setSubject] = useState('Welcome to Nexis Tech Group - Enterprise Inquiry');
  const [body, setBody] = useState(
    `<p>Dear Executive Team,</p><p>Thank you for reaching out to <strong>Nexis Tech Group</strong>. We have received your request regarding AI Transformation and Zero Trust Architecture.</p><p>Best regards,<br/><strong>Nexis Tech Group Executive Team</strong><br/>Owings Mills HQ: 848-482-1455</p>`
  );
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [confirmSendOpen, setConfirmSendOpen] = useState(false);

  // Copy helper
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const unsubscribe = initAuth(
      (authUser, token) => {
        setUser(authUser);
        setAccessToken(token);
        loadGmailData(token);
      },
      () => {
        setUser(null);
        setAccessToken(null);
      }
    );

    return () => unsubscribe();
  }, [isOpen]);

  const loadGmailData = async (token: string) => {
    try {
      setIsLoadingMessages(true);
      const prof = await fetchGmailProfile(token);
      setProfile(prof);

      const msgs = await fetchGmailMessages(token, 8);
      setMessages(msgs);
    } catch (err: any) {
      console.error('Error loading Gmail data:', err);
    } finally {
      setIsLoadingMessages(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoggingIn(true);
    setEmailError(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setAccessToken(result.accessToken);
        await loadGmailData(result.accessToken);
      }
    } catch (err: any) {
      setEmailError(err.message || 'Google sign-in failed. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    setAccessToken(null);
    setProfile(null);
    setMessages([]);
  };

  const handleExecuteSendEmail = async () => {
    if (!accessToken) return;
    setSendingEmail(true);
    setEmailError(null);
    setEmailSuccess(null);
    setConfirmSendOpen(false);

    try {
      const res = await sendGmailMessage(accessToken, recipient, subject, body, selectedAlias);
      setEmailSuccess(`Email successfully sent via Gmail API! Message ID: ${res.id}`);
      if (accessToken) {
        loadGmailData(accessToken);
      }
    } catch (err: any) {
      setEmailError(err.message || 'Failed to send email. Ensure Gmail API permissions are granted.');
    } finally {
      setSendingEmail(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-blue-950 via-slate-950 to-purple-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-600/20 border border-blue-500/30 rounded-xl text-blue-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Gmail & Domain Mailbox Hub
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Google Workspace
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Send & receive enterprise emails, manage domain aliases (@nexistechgroup.com), and inspect inbox.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="bg-slate-950 border-b border-slate-800 px-5 pt-3 flex items-center justify-between shrink-0 overflow-x-auto gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('compose')}
              className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-2 border-b-2 ${
                activeTab === 'compose'
                  ? 'border-blue-500 text-blue-400 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Compose Email</span>
            </button>
            <button
              onClick={() => setActiveTab('inbox')}
              className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-2 border-b-2 ${
                activeTab === 'inbox'
                  ? 'border-blue-500 text-blue-400 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>Gmail Inbox ({messages.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('aliases')}
              className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-2 border-b-2 ${
                activeTab === 'aliases'
                  ? 'border-blue-500 text-blue-400 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Free Domain Email Setup Guide</span>
            </button>
          </div>

          {/* User Auth state pill */}
          {user ? (
            <div className="flex items-center gap-2 text-xs py-1 px-3 bg-slate-900 border border-slate-800 rounded-full mb-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-slate-300 font-mono truncate max-w-[160px]">{user.email}</span>
              <button
                onClick={handleLogout}
                className="text-slate-400 hover:text-red-400 transition-colors ml-1"
                title="Sign out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <span className="text-[11px] text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2.5 py-1 rounded-full mb-2 shrink-0">
              Sign-in required for Gmail API
            </span>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* If NOT signed in with Google */}
          {!user && (
            <div className="bg-gradient-to-r from-slate-950 via-blue-950/40 to-slate-950 border border-blue-900/60 rounded-2xl p-6 text-center space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
                <Key className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Connect Google Account for Gmail Integration</h3>
                <p className="text-xs text-slate-300 max-w-lg mx-auto">
                  To send and receive emails via the Gmail API directly inside this app, sign in with your Google account.
                </p>
              </div>

              {/* Official Google Sign-In button */}
              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleGoogleLogin}
                  disabled={isLoggingIn}
                  className="bg-white hover:bg-slate-100 text-slate-900 font-semibold px-6 py-3 rounded-xl border border-slate-300 shadow-lg transition-all flex items-center gap-3 text-sm cursor-pointer disabled:opacity-50"
                >
                  <svg className="w-5 h-5" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                  </svg>
                  <span>{isLoggingIn ? 'Connecting to Google...' : 'Sign in with Google'}</span>
                </button>
              </div>

              {emailError && (
                <div className="bg-red-950/80 border border-red-800 text-red-200 text-xs p-3 rounded-xl max-w-md mx-auto">
                  {emailError}
                </div>
              )}
            </div>
          )}

          {/* TAB 1: COMPOSE EMAIL */}
          {activeTab === 'compose' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Send className="w-4 h-4 text-blue-400" />
                  Compose Enterprise Email via Gmail API
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  Sender: {user ? user.email : 'Not signed in'}
                </span>
              </div>

              {emailSuccess && (
                <div className="bg-emerald-950/80 border border-emerald-800 text-emerald-200 text-xs p-3 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{emailSuccess}</span>
                  </div>
                  <button onClick={() => setEmailSuccess(null)} className="text-emerald-400 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {emailError && (
                <div className="bg-red-950/80 border border-red-800 text-red-200 text-xs p-3 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{emailError}</span>
                  </div>
                  <button onClick={() => setEmailError(null)} className="text-red-400 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* From Alias */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      From Alias (@nexistechgroup.com)
                    </label>
                    <select
                      value={selectedAlias}
                      onChange={(e) => setSelectedAlias(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                    >
                      <option value="info@nexistechgroup.com">info@nexistechgroup.com (General Enquiries)</option>
                      <option value="accounts@nexistechgroup.com">accounts@nexistechgroup.com (Billing & Contracts)</option>
                      <option value="support@nexistechgroup.com">support@nexistechgroup.com (Enterprise Tech Support)</option>
                      <option value="shafiqs1@gmail.com">shafiqs1@gmail.com (Direct Executive)</option>
                    </select>
                  </div>

                  {/* Recipient */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      To Recipient
                    </label>
                    <input
                      type="email"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      placeholder="client@enterprise.com or shafiqs1@gmail.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject line"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Quick Preset Templates */}
                <div className="flex items-center gap-2 flex-wrap text-xs">
                  <span className="text-slate-400">Load Template:</span>
                  <button
                    onClick={() => {
                      setSubject('Nexis Tech Group | Executive Consultation Confirmation');
                      setBody(
                        `<p>Dear Executive Client,</p><p>Your consultation with <strong>Nexis Tech Group</strong> (Owings Mills, MD) has been scheduled. Our senior AI & Zero Trust architects look forward to evaluating your infrastructure against NIST 800-53 and HIPAA compliance benchmarks.</p><p>Direct Office Line: 848-482-1455<br/>Email: info@nexistechgroup.com</p>`
                      );
                    }}
                    className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-blue-300 border border-slate-700 rounded-lg transition-colors"
                  >
                    Consultation
                  </button>
                  <button
                    onClick={() => {
                      setSubject('Support Request Confirmation - Nexis Tech Group');
                      setBody(
                        `<p>Hello,</p><p>Thank you for contacting <strong>Nexis Tech Support</strong>. Your ticket has been routed to our 24/7 SOC / NOC engineering team.</p><p>Email: support@nexistechgroup.com<br/>Emergency Hotline: 848-482-1455</p>`
                      );
                    }}
                    className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-purple-300 border border-slate-700 rounded-lg transition-colors"
                  >
                    Support Ticket
                  </button>
                  <button
                    onClick={() => {
                      setSubject('Invoice & Statement - Nexis Tech Group Accounts');
                      setBody(
                        `<p>Attention Accounts Payable,</p><p>Please find attached the statement from <strong>Nexis Tech Group Accounts Division</strong>.</p><p>Email: accounts@nexistechgroup.com<br/>Owings Mills, MD 21117</p>`
                      );
                    }}
                    className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-slate-700 rounded-lg transition-colors"
                  >
                    Accounts Inquiry
                  </button>
                </div>

                {/* Body Content */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    HTML Message Body
                  </label>
                  <textarea
                    rows={6}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Send Button */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-400">
                    Sends message directly via official Google Gmail API.
                  </span>
                  <button
                    onClick={() => {
                      if (!user) {
                        handleGoogleLogin();
                      } else {
                        setConfirmSendOpen(true);
                      }
                    }}
                    disabled={sendingEmail}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs transition-colors shadow-lg flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{sendingEmail ? 'Sending Email...' : 'Send Email via Gmail API'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GMAIL INBOX */}
          {activeTab === 'inbox' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Inbox className="w-4 h-4 text-emerald-400" />
                  Live Gmail Messages
                </h3>
                {accessToken && (
                  <button
                    onClick={() => loadGmailData(accessToken)}
                    disabled={isLoadingMessages}
                    className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isLoadingMessages ? 'animate-spin' : ''}`} />
                    <span>Refresh</span>
                  </button>
                )}
              </div>

              {!user ? (
                <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center space-y-3">
                  <p className="text-xs text-slate-300">Sign in with Google above to view your recent Gmail messages.</p>
                  <button
                    onClick={handleGoogleLogin}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Key className="w-3.5 h-3.5" />
                    <span>Sign in with Google</span>
                  </button>
                </div>
              ) : isLoadingMessages ? (
                <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center text-slate-400 text-xs">
                  Loading Gmail messages...
                </div>
              ) : messages.length === 0 ? (
                <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center text-slate-400 text-xs">
                  No recent messages found in Gmail account.
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 truncate max-w-[250px]">{m.from}</span>
                        <span className="text-[11px] text-slate-500 font-mono">{m.date?.slice(0, 22)}</span>
                      </div>
                      <div className="text-xs font-medium text-blue-300">{m.subject}</div>
                      <p className="text-xs text-slate-400 line-clamp-2">{m.snippet}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: FREE DOMAIN EMAIL CREATION GUIDE */}
          {activeTab === 'aliases' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-950/60 via-slate-950 to-blue-950/60 border border-purple-800/80 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      How to Set Up 100% FREE Domain Email Addresses (@nexistechgroup.com)
                    </h3>
                    <p className="text-xs text-slate-300">
                      Create <code className="text-emerald-300">info@nexistechgroup.com</code>, <code className="text-purple-300">accounts@nexistechgroup.com</code>, and <code className="text-cyan-300">support@nexistechgroup.com</code> and access them inside your existing Gmail inbox without paying Google Workspace monthly fees!
                    </p>
                  </div>
                </div>
              </div>

              {/* The 3 Target Email Addresses */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400">INFO MAILBOX</span>
                    <button
                      onClick={() => copyToClipboard('info@nexistechgroup.com', 'info')}
                      className="text-slate-400 hover:text-white text-xs flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedText === 'info' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <div className="font-mono text-sm font-semibold text-white">info@nexistechgroup.com</div>
                  <p className="text-xs text-slate-400">General Executive Enquiries & Strategy Audits.</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-400">ACCOUNTS MAILBOX</span>
                    <button
                      onClick={() => copyToClipboard('accounts@nexistechgroup.com', 'accounts')}
                      className="text-slate-400 hover:text-white text-xs flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedText === 'accounts' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <div className="font-mono text-sm font-semibold text-white">accounts@nexistechgroup.com</div>
                  <p className="text-xs text-slate-400">Billing, Enterprise Contracts, Invoices & Procurement.</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400">SUPPORT MAILBOX</span>
                    <button
                      onClick={() => copyToClipboard('support@nexistechgroup.com', 'support')}
                      className="text-slate-400 hover:text-white text-xs flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedText === 'support' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <div className="font-mono text-sm font-semibold text-white">support@nexistechgroup.com</div>
                  <p className="text-xs text-slate-400">24/7 Enterprise Tech Support, EHR & Zero Trust Helpdesk.</p>
                </div>
              </div>

              {/* Step by Step Guide */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-5 text-xs">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Step-By-Step Instructions for Free Domain Setup
                </h4>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                    <div className="font-semibold text-blue-300 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                      Option A: Cloudflare Email Routing (100% Free - Recommended)
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      If your domain <code className="text-cyan-300">nexistechgroup.com</code> is managed on Cloudflare (or Namecheap/GoDaddy):
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
                      <li>Go to <strong>Cloudflare Dashboard &gt; Email &gt; Email Routing</strong>.</li>
                      <li>Click <strong>Enable Email Routing</strong> and add custom addresses:
                        <ul className="list-circle list-inside pl-4 text-slate-300">
                          <li><code>info@nexistechgroup.com</code> &rarr; forward to <code>shafiqs1@gmail.com</code></li>
                          <li><code>accounts@nexistechgroup.com</code> &rarr; forward to <code>shafiqs1@gmail.com</code></li>
                          <li><code>support@nexistechgroup.com</code> &rarr; forward to <code>shafiqs1@gmail.com</code></li>
                        </ul>
                      </li>
                      <li>Cloudflare will send a verification link to <code>shafiqs1@gmail.com</code>. Click to verify!</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                    <div className="font-semibold text-purple-300 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                      How to SEND Emails as info@ / accounts@ / support@ inside Gmail
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      To send replies from your domain emails directly inside your personal Gmail account (<code className="text-amber-300">shafiqs1@gmail.com</code>):
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-slate-400 pl-2">
                      <li>Open Gmail on desktop &gt; <strong>Settings (Gear icon) &gt; See all settings &gt; Accounts and Import</strong>.</li>
                      <li>Under "Send mail as:", click <strong>Add another email address</strong>.</li>
                      <li>Enter Name: <code className="text-white">Nexis Tech Group Info</code> and Email: <code className="text-white">info@nexistechgroup.com</code>.</li>
                      <li>Uncheck "Treat as an alias" (or keep checked), click Next.</li>
                      <li>SMTP Server: Use <code className="text-cyan-300">smtp.gmail.com</code>, Port <code className="text-cyan-300">587</code>, Username: <code className="text-cyan-300">shafiqs1@gmail.com</code>, and Password: Use a <strong>Google App Password</strong> (generated from your Google Account Security page).</li>
                      <li>Now, whenever you compose an email in Gmail or this app, you can select <code className="text-emerald-300">info@nexistechgroup.com</code> from the From dropdown!</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                    <div className="font-semibold text-emerald-300 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">3</span>
                      Option B: Google Workspace Enterprise Suite ($6/user/mo)
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      If you prefer a full dedicated admin console with Google Meet, Google Drive, and separate inboxes for each team member:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
                      <li>Sign up at <strong>workspace.google.com</strong> with your domain <code className="text-blue-300">nexistechgroup.com</code>.</li>
                      <li>Create primary user <code className="text-white">shafiqs1@nexistechgroup.com</code> and add domain aliases for <code className="text-white">info@</code>, <code className="text-white">accounts@</code>, and <code className="text-white">support@</code> for free under the single user license!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Confirmation Dialog BEFORE Sending Email (Workspace Integration mandatory check) */}
        {confirmSendOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl">
              <div className="flex items-center gap-3 text-amber-400">
                <AlertCircle className="w-6 h-6 shrink-0" />
                <h3 className="text-base font-bold text-white">Confirm Email Dispatch</h3>
              </div>
              <p className="text-xs text-slate-300">
                Are you sure you want to send this email via the <strong>Gmail API</strong> on behalf of your connected Google account?
              </p>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1 font-mono text-slate-300">
                <div><strong>Sender Alias:</strong> {selectedAlias}</div>
                <div><strong>To Recipient:</strong> {recipient}</div>
                <div><strong>Subject:</strong> {subject}</div>
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setConfirmSendOpen(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleExecuteSendEmail}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl transition-colors shadow-lg flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm & Send</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
