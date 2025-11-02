import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Helper function to escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, business, email, message } = body

    // Validate required fields
    if (!name || !business || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Validate SMTP configuration
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP configuration missing: SMTP_USER or SMTP_PASSWORD not set')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
    } catch (verifyError: any) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email service configuration error. Please check SMTP settings.' },
        { status: 500 }
      )
    }

    // Sanitize inputs
    const sanitizedName = escapeHtml(name.trim())
    const sanitizedBusiness = escapeHtml(business.trim())
    const sanitizedEmail = escapeHtml(email.trim())
    const sanitizedMessage = escapeHtml(message.trim())

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'valizadeh.au@gmail.com',
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin-top: 20px;">
            <p><strong style="color: #555;">Name:</strong> ${sanitizedName}</p>
            <p><strong style="color: #555;">Business:</strong> ${sanitizedBusiness}</p>
            <p><strong style="color: #555;">Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
            <p><strong style="color: #555;">Message:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px; white-space: pre-wrap;">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
      `,
      replyTo: email.trim(),
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.'
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check SMTP credentials.'
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server. Please check SMTP settings.'
    } else if (error.responseCode === 535) {
      errorMessage = 'Authentication failed. Please check your email and password.'
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

