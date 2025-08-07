// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, message } = await req.json();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: `${firstName} ${lastName}`,
          email: "info@neurotone.io", // ✅ verified sender email
        },
        replyTo: {
          email: email, // ✅ user's provided email (replyTo)
          name: `${firstName} ${lastName}`,
        },
        to: [{ email: "info@neurotone.io" }],
        subject: "neurotone Contact Form Submission",
        htmlContent: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>neurotone Contact Form Submission</title>
    <style>
      /* Reset & Modern Styling */
      body {
        margin: 0;
        padding: 0;
        background-color: #09090B;
        font-family: Arial, sans-serif;
        color: #FFF0BC;
      }
      a {
        color: #FFF0BC !important;
        text-decoration: none !important;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #09090B;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .header {
        background: linear-gradient(to right, #FF6333, #8d361c);
        padding: 20px;
        text-align: center;
      }
      .header h2 {
        margin: 0;
        font-size: 24px;
        color: #FFF0BC;
      }
      .content {
        padding: 20px;
        line-height: 1.6;
        color: #FFF0BC;
      }
      .content p {
        margin-bottom: 16px;
      }
      /* Labels in content will have the orange color */
      .content strong {
        color: #FF6333;
      }
      .footer {
        background-color: #09090B;
        padding: 10px;
        text-align: center;
        font-size: 12px;
        color: #FFF0BC;
      }
      /* Responsive adjustments */
      @media only screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          margin: 10px auto;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>neurotone Contact Form Submission</h2>
      </div>
      <div class="content">
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
        `,
      }),
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(
        errorResponse.message || "Failed to send email via Brevo"
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Brevo Error:", error.message);
      return NextResponse.json(
        { message: error.message || "Internal server error" },
        { status: 500 }
      );
    }
    console.error("Brevo Error: Unknown error", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
