# Google Sheets Quote Capture Setup

This project now sends quote form submissions to a Google Apps Script webhook.

## 1. Add sheet headers

Open your Google Sheet and add this header row in `Sheet1`:

`Timestamp | Source | Name | Email | Phone | Company | Message`

## 2. Open Apps Script

In the Google Sheet:

1. Click `Extensions` -> `Apps Script`
2. Replace the default script with this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.source || '',
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.message || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy the script

1. Click `Deploy` -> `New deployment`
2. Choose type `Web app`
3. Set `Execute as`: `Me`
4. Set `Who has access`: `Anyone`
5. Click `Deploy`
6. Copy the `Web app URL`

## 4. Add the webhook URL to the site

Create a `.env` file in the project root with:

```env
VITE_GOOGLE_SHEET_WEBHOOK_URL=PASTE_YOUR_WEB_APP_URL_HERE
```

## 5. Restart the dev server

If the site is already running, restart Vite so it picks up the new env variable.

## Notes

- Do not put your Gmail password into the frontend code.
- Since that password was shared in chat, rotate it in Google immediately after setup.
- If your sheet tab is not named `Sheet1`, update the script accordingly.
