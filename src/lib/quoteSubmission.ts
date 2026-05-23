export type QuoteFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type QuoteSubmissionPayload = QuoteFormData & {
  source: string;
  submittedAt: string;
};

const SHEET_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL?.trim();

export async function submitQuoteRequest(data: QuoteFormData, source: string) {
  if (!SHEET_WEBHOOK_URL) {
    throw new Error('Google Sheets webhook URL is not configured.');
  }

  const payload: QuoteSubmissionPayload = {
    ...data,
    source,
    submittedAt: new Date().toISOString(),
  };

  const response = await fetch(SHEET_WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  // Google Apps Script web apps often return opaque responses in the browser.
  // If fetch resolves, we treat the submission as sent.
  void response;
}
