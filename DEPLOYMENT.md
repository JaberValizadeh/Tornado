# Vercel Deployment Guide

## ✅ Status
- ✅ Code pushed to GitHub: https://github.com/JaberValizadeh/Tornado
- ✅ Vercel configuration added (`vercel.json`)
- ⏳ Vercel project connection pending

## Quick Setup (Recommended - Web Dashboard)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/new
   - Sign in with GitHub (use the same account as your repo)

2. **Import Your Repository**
   - Click "Import Git Repository"
   - Select `JaberValizadeh/Tornado`
   - Vercel will auto-detect Next.js framework

3. **Configure Project**
   - **Project Name**: Tornado (or your preferred name)
   - **Root Directory**: `./` (leave as default)
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

4. **Environment Variables**
   - Click "Environment Variables"
   - Add: `NEXT_PUBLIC_BOOKINGS_URL` (optional, for Microsoft Bookings integration)
   - Value: Your Microsoft Bookings URL if you have one

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at: `https://tornado-[random].vercel.app`
   - **After adding domain**: Your site will also be at `https://tornadoai.com.au`

## Alternative: CLI Method

If you prefer command line:

```bash
cd "C:\Users\90957792\Downloads\Tornado"
vercel login
vercel link
vercel --prod
```

## Post-Deployment

After deployment succeeds:
1. Your site will have a production URL: `https://tornado-[random].vercel.app`
2. **Add Custom Domain: `tornadoai.com.au`** (see Domain Setup below)
3. Environment variables can be updated anytime in Settings → Environment Variables

## Domain Setup: tornadoai.com.au

Your custom domain is already configured in the code (`app/layout.tsx`). To connect it in Vercel:

### Step 1: Add Domain in Vercel
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Click "Add Domain"
3. Enter: `tornadoai.com.au`
4. Click "Add"

### Step 2: Configure DNS Records

**Vercel will show you the exact DNS records required.** Look for the message: *"The DNS records at your provider must match the following records..."*

1. **Copy the exact DNS record** Vercel displays (it will show Type, Name, and Value)

2. **Go to your domain registrar** (GoDaddy, Namecheap, Cloudflare, etc.)
   - Find "DNS Management" or "Advanced DNS" settings
   - Locate existing DNS records for `@` or `tornadoai.com.au`

3. **Add/Update the record:**
   - **If Vercel shows an A Record:**
     - Type: `A`
     - Name: `@` (or leave blank/root)
     - Value: The IP address Vercel provides
     - **Remove any existing A records** for `@` (only keep the Vercel one)
   
   - **If Vercel shows a CNAME:**
     - Some registrars don't support CNAME on root domain
     - If you get "Invalid Configuration", contact Vercel support for an A record IP
     - Or use the nameserver option instead

4. **Wait 5-10 minutes**, then in Vercel Dashboard:
   - Go to Settings → Domains
   - Click **"Refresh"** next to your domain
   - Status should change from "Invalid Configuration" to "Valid Configuration"

**Troubleshooting "Invalid Configuration":**
- ✅ Ensure the record matches **exactly** what Vercel shows
- ✅ Remove conflicting records (only ONE A record for `@`)
- ✅ If using Cloudflare, disable proxying (gray cloud, not orange)
- ✅ Wait 10-15 minutes for DNS propagation

📖 **Detailed guide**: See [DNS_SETUP.md](./DNS_SETUP.md) for registrar-specific steps.

### Step 3: SSL Certificate
- Vercel automatically provisions SSL certificates (HTTPS) for your domain
- Wait 1-24 hours for DNS propagation and SSL certificate issuance
- You'll receive an email when the domain is ready

### Step 4: Verify Domain
- Check domain status in Vercel Dashboard → Settings → Domains
- Status will change from "Pending" to "Valid Configuration" when DNS is correct
- Once valid, your site will be live at: **https://tornadoai.com.au**

### DNS Propagation Check
You can check if DNS is propagating using:
- https://dnschecker.org
- Enter: `tornadoai.com.au` and check A/CNAME records globally

## Fixing DEPLOYMENT_NOT_FOUND Error

If you encounter this error:
- **Cause**: Accessing a deleted or non-existent deployment URL
- **Solution**: Use your project's stable URL from Vercel Dashboard (not individual deployment URLs)
- The main project URL (`*.vercel.app`) always points to the latest production deployment

## Troubleshooting

- **Build fails**: Check build logs in Vercel Dashboard → Deployments → [deployment] → Build Logs
- **Environment variables not working**: Ensure variables are set for "Production", "Preview", and "Development" environments
- **GitHub connection issues**: Re-authenticate GitHub in Vercel Dashboard → Settings → Git

