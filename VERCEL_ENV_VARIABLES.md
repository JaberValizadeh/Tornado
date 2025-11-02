# Vercel Environment Variables Configuration

This document lists all environment variables that need to be configured in your Vercel project.

## How to Add Environment Variables in Vercel

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your project (Tornado)
3. Go to **Settings** → **Environment Variables**
4. Add each variable below with its corresponding value
5. Select the environments: **Production**, **Preview**, and **Development** (or as needed)
6. Click **Save**

---

## Required Environment Variables

### 1. OPENAI_API_KEY
**Required for:** Chatbot functionality (`/api/chat`)

**Description:** Your OpenAI API key for the AI chatbot feature.

**Where to get it:**
- Go to https://platform.openai.com/api-keys
- Sign in or create an OpenAI account
- Click "Create new secret key"
- Copy the key (it starts with `sk-`)

**Example Value:**
```
sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Note:** Without this, the chatbot will not work, but the website will still function.

---

### 2. SMTP_USER
**Required for:** Contact form email functionality (`/api/contact`)

**Description:** Your email address used for SMTP authentication.

**Example Value:**
```
your-email@gmail.com
```
or
```
your-email@yourdomain.com
```

---

### 3. SMTP_PASSWORD
**Required for:** Contact form email functionality (`/api/contact`)

**Description:** Your email password or app-specific password for SMTP.

**For Gmail:**
- If you have 2FA enabled, you need to create an "App Password"
- Go to: https://myaccount.google.com/apppasswords
- Select "Mail" and your device
- Copy the 16-character password

**Example Value (Gmail App Password):**
```
abcd efgh ijkl mnop
```
*(Enter without spaces: `abcdefghijklmnop`)*

**Note:** Never use your regular Gmail password if 2FA is enabled.

---

## Optional Environment Variables

### 4. SMTP_HOST
**Optional** - Defaults to `smtp.gmail.com`

**Description:** SMTP server hostname.

**Common Values:**
- Gmail: `smtp.gmail.com`
- Outlook: `smtp-mail.outlook.com`
- Yahoo: `smtp.mail.yahoo.com`
- Custom domain: `smtp.yourdomain.com`

**Example Value:**
```
smtp.gmail.com
```

---

### 5. SMTP_PORT
**Optional** - Defaults to `587`

**Description:** SMTP server port number.

**Common Values:**
- `587` (TLS/STARTTLS - Recommended)
- `465` (SSL)
- `25` (Not recommended, often blocked)

**Example Value:**
```
587
```

---

### 6. SMTP_FROM
**Optional** - Defaults to `SMTP_USER` value

**Description:** The "from" email address displayed in sent emails.

**Example Value:**
```
noreply@tornadoai.com.au
```
or
```
contact@tornadoai.com.au
```

---

### 7. NEXT_PUBLIC_BOOKINGS_URL
**Optional** - For Microsoft Bookings integration

**Description:** URL to your Microsoft Bookings page for scheduling consultations.

**Where to get it:**
- Set up Microsoft Bookings at: https://bookings.microsoft.com
- Copy your booking page URL

**Example Value:**
```
https://outlook.office.com/book/with-me/your-page-id
```

**Note:** The `NEXT_PUBLIC_` prefix means this variable is exposed to the browser. Only use it for non-sensitive public URLs.

---

## Summary Table

| Variable Name | Required | Default | Purpose |
|--------------|----------|---------|---------|
| `OPENAI_API_KEY` | ✅ Yes | None | Chatbot functionality |
| `SMTP_USER` | ✅ Yes | None | Contact form emails |
| `SMTP_PASSWORD` | ✅ Yes | None | Contact form emails |
| `SMTP_HOST` | ❌ No | `smtp.gmail.com` | Email server |
| `SMTP_PORT` | ❌ No | `587` | Email server port |
| `SMTP_FROM` | ❌ No | `SMTP_USER` | Email sender address |
| `NEXT_PUBLIC_BOOKINGS_URL` | ❌ No | Empty | Booking button link |

---

## Recommended Configuration Example

Here's a recommended configuration for a Gmail-based setup:

```
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_FROM=contact@tornadoai.com.au
NEXT_PUBLIC_BOOKINGS_URL=https://outlook.office.com/book/with-me/your-page-id
```

---

## After Adding Variables

1. **Redeploy your application** after adding environment variables
   - Go to Vercel Dashboard → Your Project → Deployments
   - Click the "..." menu on the latest deployment
   - Click "Redeploy"
   - Or push a new commit to trigger automatic deployment

2. **Verify the setup:**
   - Test the chatbot at the bottom right of your website
   - Test the contact form at `/contact`
   - Check that emails are being received

---

## Security Notes

⚠️ **Important:**
- Never commit environment variables to Git
- Never share your API keys or passwords
- Use App Passwords for Gmail (not your regular password)
- Rotate keys if they are accidentally exposed
- The `.env.local` file is already in `.gitignore` and won't be committed

---

## Troubleshooting

### Chatbot not working?
- Check that `OPENAI_API_KEY` is set correctly
- Verify the key is valid at https://platform.openai.com/api-keys
- Check Vercel deployment logs for errors

### Contact form not sending emails?
- Verify `SMTP_USER` and `SMTP_PASSWORD` are correct
- For Gmail, ensure you're using an App Password (not regular password)
- Check that `SMTP_HOST` and `SMTP_PORT` match your email provider
- Review Vercel function logs for SMTP connection errors

### Booking button not working?
- Verify `NEXT_PUBLIC_BOOKINGS_URL` is a valid Microsoft Bookings URL
- The button will show an alert if the URL is not configured

