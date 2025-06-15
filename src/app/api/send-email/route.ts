import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const result = await resend.emails.send({
      from: "GasTech Website <onboarding@resend.dev>",
      to: ["info@gastech.com.sa"],
      subject: "New Consultation Request",
      html: generateEmailTemplate(data),
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

interface ConsultationRequestData {
  name?: string;
  email?: string;
  phone?: string;
  position?: string;
  companyName?: string;
  stationsCount?: string | number;
  pumpsPerStation?: string | number;
  nozzlesPerPump?: string | number;
  tanksCount?: string | number;
  wantDemo?: boolean;
  message?: string;
}

function generateEmailTemplate(data: ConsultationRequestData) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Consultation Request</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333333;
          background-color: #f8fafc;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .header {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          padding: 32px 24px;
          text-align: center;
        }
        
        .header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        
        .header p {
          font-size: 16px;
          opacity: 0.9;
        }
        
        .content {
          padding: 32px 24px;
        }
        
        .section {
          margin-bottom: 32px;
        }
        
        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #1e40af;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .info-grid {
          display: grid;
          gap: 16px;
        }
        
        .info-item {
          background-color: #f8fafc;
          padding: 16px;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        
        .info-label {
          font-size: 14px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        
        .info-value {
          font-size: 16px;
          color: #111827;
          font-weight: 500;
        }
        
        .message-box {
          background-color: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 8px;
          padding: 20px;
          margin-top: 16px;
        }
        
        .message-text {
          font-size: 15px;
          line-height: 1.6;
          color: #0c4a6e;
          white-space: pre-wrap;
        }
        
        .highlight {
          background-color: #fef3c7;
          padding: 12px 16px;
          border-radius: 6px;
          border-left: 4px solid #f59e0b;
          margin: 16px 0;
        }
        
        .highlight-text {
          font-weight: 600;
          color: #92400e;
        }
        
        .footer {
          background-color: #f8fafc;
          padding: 24px;
          text-align: center;
          border-top: 1px solid #e5e7eb;
        }
        
        .footer p {
          font-size: 14px;
          color: #6b7280;
        }
        
        .timestamp {
          font-size: 12px;
          color: #9ca3af;
          margin-top: 8px;
        }
        
        @media (max-width: 600px) {
          .email-container {
            margin: 0;
            border-radius: 0;
          }
          
          .header, .content, .footer {
            padding: 24px 16px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>🏢 GasTech</h1>
          <p>New Consultation Request Received</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h2 class="section-title">👤 Contact Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Full Name</div>
                <div class="info-value">${data.name || "Not provided"}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email Address</div>
                <div class="info-value">${data.email || "Not provided"}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone Number</div>
                <div class="info-value">${data.phone || "Not provided"}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Position</div>
                <div class="info-value">${data.position || "Not provided"}</div>
              </div>
            </div>
          </div>
          
          <div class="section">
            <h2 class="section-title">🏭 Company Details</h2>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Company Name</div>
                <div class="info-value">${data.companyName || "Not provided"}</div>
              </div>
            </div>
          </div>
          
          <div class="section">
            <h2 class="section-title">⛽ Station Requirements</h2>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Number of Stations</div>
                <div class="info-value">${data.stationsCount || "Not specified"}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Pumps per Station</div>
                <div class="info-value">${data.pumpsPerStation || "Not specified"}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Nozzles per Pump</div>
                <div class="info-value">${data.nozzlesPerPump || "Not specified"}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Number of Tanks</div>
                <div class="info-value">${data.tanksCount || "Not specified"}</div>
              </div>
            </div>
          </div>
          
          ${
            data.wantDemo
              ? `
          <div class="highlight">
            <div class="highlight-text">🎯 Demo Requested: This client is interested in a product demonstration</div>
          </div>
          `
              : ""
          }
          
          ${
            data.message
              ? `
          <div class="section">
            <h2 class="section-title">💬 Additional Message</h2>
            <div class="message-box">
              <div class="message-text">${data.message}</div>
            </div>
          </div>
          `
              : ""
          }
        </div>
        
        <div class="footer">
          <p><strong>GasTech Consultation System</strong></p>
          <p>This email was automatically generated from your website contact form.</p>
          <div class="timestamp">Received on ${new Date().toLocaleString(
            "en-US",
            {
              timeZone: "Asia/Riyadh",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              timeZoneName: "short",
            }
          )}</div>
        </div>
      </div>
    </body>
    </html>
  `;
}
