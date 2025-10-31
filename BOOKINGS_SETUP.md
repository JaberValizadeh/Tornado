# Microsoft Bookings Setup

## How to Set Up "Book a Consultation" Button

### Step 1: Get Your Microsoft Bookings URL

1. Go to [Microsoft Bookings](https://bookings.microsoft.com/)
2. Sign in with your Microsoft account
3. Select your booking calendar
4. Click on "Share your booking page"
5. Copy the public booking page URL (it will look like: `https://outlook.office.com/book/YOUR_BOOKINGS_ID/`)

### Step 2: Create .env.local File

1. In the project root directory, create a file named `.env.local`
2. Add the following line with your Microsoft Bookings URL:

```
NEXT_PUBLIC_BOOKINGS_URL=https://outlook.office.com/book/YOUR_BOOKINGS_ID/
```

Replace `YOUR_BOOKINGS_ID` with your actual booking page ID.

### Step 3: Restart the Development Server

After creating/updating `.env.local`, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then run:
npm run dev
```

### Step 4: Test

1. Open your website in the browser
2. Click the "Book a Consultation" button in the header
3. It should open your Microsoft Bookings page in a new tab
4. Users can then select a day, time, and enter their Name and Email

## Troubleshooting

- If the button doesn't work, check that `.env.local` exists and contains the correct URL
- Make sure you restarted the dev server after creating/updating `.env.local`
- The URL must start with `https://` or `http://`

