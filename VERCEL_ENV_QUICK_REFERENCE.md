# Quick Reference: Vercel Environment Variables

Copy these keys and add your values in Vercel Dashboard → Settings → Environment Variables

---

## Required Variables

```
OPENAI_API_KEY
```
**Value:** `sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`  
*Get from: https://platform.openai.com/api-keys*

```
SMTP_USER
```
**Value:** `your-email@gmail.com`  
*Your email address*

```
SMTP_PASSWORD
```
**Value:** `abcdefghijklmnop`  
*Gmail App Password (16 chars, no spaces)*  
*Get from: https://myaccount.google.com/apppasswords*

---

## Optional Variables (with recommended defaults)

```
SMTP_HOST
```
**Value:** `smtp.gmail.com`  
*Default: smtp.gmail.com*

```
SMTP_PORT
```
**Value:** `587`  
*Default: 587*

```
SMTP_FROM
```
**Value:** `contact@tornadoai.com.au`  
*Or your preferred sender email*  
*Default: Uses SMTP_USER if not set*

```
NEXT_PUBLIC_BOOKINGS_URL
```
**Value:** `https://outlook.office.com/book/with-me/your-page-id`  
*Your Microsoft Bookings URL*  
*Optional - leave empty if not using*

---

## Quick Setup Steps

1. **OpenAI API Key:**
   - Visit: https://platform.openai.com/api-keys
   - Create account/login
   - Click "Create new secret key"
   - Copy the key (starts with `sk-`)

2. **Gmail App Password (for SMTP):**
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" → Your device
   - Copy the 16-character password (enter without spaces)

3. **In Vercel:**
   - Go to: Settings → Environment Variables
   - Add each variable above
   - Select: Production, Preview, Development
   - Save and redeploy

---

## Minimum Required Setup (Website will work, but features limited)

If you only want the website to work without chatbot and contact form:

**No environment variables needed!** The site will load, but:
- Chatbot will show an error
- Contact form will show "Email service not configured"

---

## Full Setup (All features enabled)

Add all 7 variables above to enable:
- ✅ AI Chatbot
- ✅ Contact form emails
- ✅ Booking button link

