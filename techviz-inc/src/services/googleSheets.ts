export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwoPrf2zdtu47zcmeAkBIN2Sjh6zg7AHsl4-S5-7rsT/dev';

/**
 * Sends form data directly to the user's Google Sheets Apps Script endpoint.
 */
export async function submitToGoogleSheets(data: Record<string, any>): Promise<boolean> {
  try {
    const payload: Record<string, string> = {
      timestamp: new Date().toISOString(),
      submittedAt: new Date().toLocaleString(),
    };

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        payload[key] = typeof value === 'object' ? JSON.stringify(value) : String(value);
      }
    });

    const searchParams = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) => searchParams.append(k, v));

    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: searchParams.toString(),
    });

    return true;
  } catch (error) {
    console.error('Error submitting form data to Google Sheets Apps Script:', error);
    return false;
  }
}
