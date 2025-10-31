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
1. Your site will have a production URL
2. You can add a custom domain in Vercel Dashboard → Settings → Domains
3. Environment variables can be updated anytime in Settings → Environment Variables

## Fixing DEPLOYMENT_NOT_FOUND Error

If you encounter this error:
- **Cause**: Accessing a deleted or non-existent deployment URL
- **Solution**: Use your project's stable URL from Vercel Dashboard (not individual deployment URLs)
- The main project URL (`*.vercel.app`) always points to the latest production deployment

## Troubleshooting

- **Build fails**: Check build logs in Vercel Dashboard → Deployments → [deployment] → Build Logs
- **Environment variables not working**: Ensure variables are set for "Production", "Preview", and "Development" environments
- **GitHub connection issues**: Re-authenticate GitHub in Vercel Dashboard → Settings → Git

