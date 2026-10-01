/**
 * Configuration & Settings
 */
const CONFIG = {
  SHEET_NAME: "Client Inquiries",
  ADMIN_EMAIL: "yashveer2024@gmail.com", // Replace or confirm your recipient email
  ADMIN_NAME: "Yash",
  STATUS_EMAILED: "Emailed to Yash",
  STATUS_PENDING: "Pending",
  DEFAULT_LEAD_STATUS: "New"
};

/**
 * Handle GET request (e.g. testing URL in browser)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    message: "Google Apps Script Web App is active and ready to receive POST requests."
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle POST request from your Next.js application
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Prevent race conditions on concurrent submissions

  try {
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    }
    if (!sheet) {
      throw new Error(`Sheet "${CONFIG.SHEET_NAME}" not found and no active sheets available.`);
    }

    // Parse incoming payload safely (supports JSON, URL-encoded, or direct editor test runs)
    let payload = {};
    if (e && e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (err) {
        payload = (e && e.parameter) || {};
      }
    } else if (e && e.parameter && Object.keys(e.parameter).length > 0) {
      payload = e.parameter;
    } else {
      // Sample mock data for manual Run button testing in Apps Script Editor
      payload = {
        name: "Test Inquiry (Apps Script Test)",
        emailOrPhone: "test@example.com",
        projectType: "Custom Website",
        timeline: "Standard (1-2 weeks)",
        brief: "Test submission triggered from the Google Apps Script Editor."
      };
    }

    const timestamp = Utilities.formatDate(
      new Date(),
      SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone() || "GMT+5:30",
      "yyyy-MM-dd HH:mm:ss"
    );

    const name = payload.name || payload.company || payload.nameOrCompany || "N/A";
    const contact = payload.emailOrPhone || payload.phoneOrEmail || payload.email || payload.phone || "N/A";
    const projectType = payload.projectType || payload.businessType || payload.serviceNeeded || "N/A";
    const timeline = payload.timeline || payload.timelineOrScope || payload.budget || "N/A";
    const brief = payload.brief || payload.projectBrief || payload.message || "N/A";

    // Find the next available row starting from row 8 (Columns B to I)
    const lastRow = Math.max(sheet.getLastRow(), 7);
    const targetRow = lastRow + 1;

    // Send Admin Notification Email
    let emailSent = false;
    try {
      sendAdminNotificationEmail({
        timestamp,
        name,
        contact,
        projectType,
        timeline,
        brief,
        rowNumber: targetRow
      });
      emailSent = true;
    } catch (mailErr) {
      Logger.log("Email dispatch failed: " + mailErr.toString());
      emailSent = false;
    }

    const adminStatus = emailSent ? CONFIG.STATUS_EMAILED : CONFIG.STATUS_PENDING;

    // Write row data into columns B:I
    // B: Timestamp | C: Name/Company | D: Email or Phone | E: Project Type | F: Timeline/Scope | G: Project Brief | H: Admin Status | I: Lead Status
    const rowValues = [
      [
        timestamp,
        name,
        contact,
        projectType,
        timeline,
        brief,
        adminStatus,
        CONFIG.DEFAULT_LEAD_STATUS
      ]
    ];

    sheet.getRange(targetRow, 2, 1, 8).setValues(rowValues);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead recorded successfully",
      row: targetRow,
      adminEmailed: emailSent
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error in doPost: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Sends a structured HTML notification email to Yash
 */
function sendAdminNotificationEmail(data) {
  const spreadsheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  const subject = `🚀 New Client Inquiry: ${data.name} (${data.projectType})`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E0E2EC; border-radius: 8px;">
      <h2 style="color: #1A365D; margin-top: 0;">New Project Inquiry Received</h2>
      <p style="color: #49454E; font-size: 14px;">A new lead has just submitted details through your website form:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
        <tr style="background-color: #F8F9FA;">
          <td style="padding: 10px; font-weight: bold; width: 35%; border-bottom: 1px solid #E0E2EC;">Timestamp</td>
          <td style="padding: 10px; border-bottom: 1px solid #E0E2EC;">${data.timestamp}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #E0E2EC;">Name / Company</td>
          <td style="padding: 10px; border-bottom: 1px solid #E0E2EC;"><strong>${data.name}</strong></td>
        </tr>
        <tr style="background-color: #F8F9FA;">
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #E0E2EC;">Email / Phone</td>
          <td style="padding: 10px; border-bottom: 1px solid #E0E2EC;"><a href="mailto:${data.contact}">${data.contact}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #E0E2EC;">Project Type</td>
          <td style="padding: 10px; border-bottom: 1px solid #E0E2EC;">${data.projectType}</td>
        </tr>
        <tr style="background-color: #F8F9FA;">
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #E0E2EC;">Timeline / Scope</td>
          <td style="padding: 10px; border-bottom: 1px solid #E0E2EC;">${data.timeline}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; vertical-align: top; border-bottom: 1px solid #E0E2EC;">Project Brief</td>
          <td style="padding: 10px; border-bottom: 1px solid #E0E2EC; white-space: pre-wrap;">${data.brief}</td>
        </tr>
      </table>

      <div style="margin-top: 25px; text-align: center;">
        <a href="${spreadsheetUrl}" style="background-color: #2F3E75; color: #FFFFFF; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">Open Google Sheet</a>
      </div>
      
      <p style="font-size: 12px; color: #79767D; margin-top: 25px; text-align: center;">
        Status updated to <strong>Emailed to Yash</strong> in row ${data.rowNumber}. Older entries are never re-sent.
      </p>
    </div>
  `;

  MailApp.sendEmail({
    to: CONFIG.ADMIN_EMAIL,
    subject: subject,
    htmlBody: htmlBody
  });
}

/**
 * Run this function directly from the Apps Script Editor dropdown to test insertion and email!
 */
function testManualSubmission() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        name: "Yash Test Lead",
        emailOrPhone: "+91 97188 71979",
        projectType: "Complete Business Website",
        timeline: "Standard (1-2 weeks)",
        brief: "Testing Google Apps Script integration and email notifications from Apps Script Editor."
      })
    }
  };
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}