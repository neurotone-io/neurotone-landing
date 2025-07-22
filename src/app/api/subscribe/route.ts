// src/app/api/subscribe/route.ts (if using App Router)
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      email,
      listIds: [parseInt(process.env.BREVO_LIST_ID!)],
      updateEnabled: true,
    }),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    return NextResponse.json(
      { error: errorDetails.message || "Subscription failed" },
      { status: response.status }
    );
  }

  return NextResponse.json(
    { message: "Successfully subscribed!" },
    { status: 200 }
  );
}
