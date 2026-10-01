import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phoneOrEmail, businessType, budget, message } = body;

    if (!name || !phoneOrEmail || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, contact, or message)." },
        { status: 400 }
      );
    }

    const scriptUrl =
      process.env.GOOGLE_SHEET_WEBAPP_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBAPP_URL;

    if (!scriptUrl) {
      console.error("Missing GOOGLE_SHEET_WEBAPP_URL environment variable.");
      return NextResponse.json(
        { error: "Contact service is temporarily misconfigured. Please reach out via WhatsApp." },
        { status: 500 }
      );
    }

    // Forward payload formatted for code.gs
    const payload = {
      name: name,
      emailOrPhone: phoneOrEmail,
      projectType: businessType || "Custom Website",
      timeline: budget || "Standard (1-2 weeks)",
      brief: message,
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const result = await response.json().catch(() => ({ status: "success" }));

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error forwarding contact inquiry to Google Sheets:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}
