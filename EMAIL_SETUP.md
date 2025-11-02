# Email Setup Guide

This guide will help you configure email functionality for the contact form on the "Let's Work Together" page.

## Quick Setup

The contact form sends emails to `valizadeh.au@gmail.com` when users submit the form.

## Configuration Steps

### 1. Create `.env.local` file

In the root directory of the project, create a file named `.env.local` (if it doesn't exist).

### 2. Add SMTP Configuration

Add the following environment variables to your `.env.local` file:

```env
# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
```

### 3. Gmail Setup (Recommended)

If you're using Gmail, you'll need to:

1. **Enable 2-Step Verification** on your Google account:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate an App Password**:
   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Copy the 16-character password
   - Use this password as your `SMTP_PASSWORD` (not your regular Gmail password)

3. **Update `.env.local`**:
   ```env
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=xxxx xxxx xxxx xxxx  # The 16-character app password
   ```

### 4. Other Email Providers

#### Outlook/Office 365
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_FROM=your-email@outlook.com
```

#### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@yahoo.com
```

#### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587  # or 465 for SSL
SMTP_USER=your-email@domain.com
SMTP_PASSWORD=your-password
SMTP_FROM=your-email@domain.com
```

**Note**: For port 465, use `SMTP_PORT=465` and the secure connection will be enabled automatically.

## Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page: `/contact`

3. Fill out the form and click "Send Message"

4. Check your email inbox at `valizadeh.au@gmail.com`

## Troubleshooting

### Error: "Email service is not configured"
- Make sure `.env.local` exists in the root directory
- Verify all SMTP environment variables are set
- Restart your development server after adding environment variables

### Error: "Email authentication failed"
- For Gmail: Make sure you're using an App Password, not your regular password
- Verify 2-Step Verification is enabled on your Google account
- Check that your email and password are correct

### Error: "Could not connect to email server"
- Verify the SMTP_HOST and SMTP_PORT are correct for your email provider
- Check your firewall/network settings
- Some email providers block connections from certain IPs - you may need to whitelist your server

### Server logs
Check the server console for detailed error messages that can help diagnose the issue.

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the same environment variables in your hosting platform's dashboard
2. Make sure to set them as "Environment Variables" or "Secrets"
3. Never commit `.env.local` to git (it's already in `.gitignore`)

## Security Notes

- Never commit your `.env.local` file to version control
- Use App Passwords instead of your main email password when possible
- Consider using a dedicated email account for contact form submissions
- Regularly rotate your SMTP passwords

