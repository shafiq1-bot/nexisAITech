export interface GmailProfile {
  emailAddress: string;
  messagesTotal: number;
  threadsTotal: number;
  historyId: string;
}

export interface GmailMessageHeader {
  name: string;
  value: string;
}

export interface GmailMessageSummary {
  id: string;
  threadId: string;
  snippet?: string;
  subject?: string;
  from?: string;
  date?: string;
}

export const fetchGmailProfile = async (accessToken: string): Promise<GmailProfile> => {
  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/profile', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Failed to fetch Gmail profile');
  }
  return res.json();
};

export const fetchGmailMessages = async (
  accessToken: string,
  maxResults = 10,
  query = ''
): Promise<GmailMessageSummary[]> => {
  const url = new URL('https://gmail.googleapis.com/gmail/v1/users/me/messages');
  url.searchParams.set('maxResults', String(maxResults));
  if (query) url.searchParams.set('q', query);

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Failed to list Gmail messages');
  }

  const data = await res.json();
  if (!data.messages || data.messages.length === 0) {
    return [];
  }

  // Fetch details for each message
  const details = await Promise.all(
    data.messages.slice(0, maxResults).map(async (m: { id: string; threadId: string }) => {
      try {
        const detailRes = await fetch(
          `https://gmail.googleapis.com/gmail/v1/users/me/messages/${m.id}?format=full`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        if (!detailRes.ok) return { id: m.id, threadId: m.threadId };
        const msg = await detailRes.json();
        const headers: GmailMessageHeader[] = msg.payload?.headers || [];
        const subject = headers.find((h) => h.name.toLowerCase() === 'subject')?.value || '(No Subject)';
        const from = headers.find((h) => h.name.toLowerCase() === 'from')?.value || '(Unknown)';
        const date = headers.find((h) => h.name.toLowerCase() === 'date')?.value || '';

        return {
          id: msg.id,
          threadId: msg.threadId,
          snippet: msg.snippet,
          subject,
          from,
          date,
        };
      } catch (e) {
        return { id: m.id, threadId: m.threadId };
      }
    })
  );

  return details;
};

export const sendGmailMessage = async (
  accessToken: string,
  to: string,
  subject: string,
  htmlBody: string,
  fromAlias?: string
): Promise<{ id: string; threadId: string }> => {
  const fromHeader = fromAlias ? `From: ${fromAlias}` : '';
  const emailLines = [
    `To: ${to}`,
    fromHeader,
    `Subject: =?utf-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=utf-8`,
    ``,
    htmlBody,
  ].filter(Boolean);

  const rawString = emailLines.join('\r\n');
  const base64Encoded = btoa(unescape(encodeURIComponent(rawString)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw: base64Encoded }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Failed to send email via Gmail API');
  }

  return res.json();
};
