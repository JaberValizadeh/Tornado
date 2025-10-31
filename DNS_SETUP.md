# DNS Setup Guide for tornadoai.com.au

## Understanding Vercel's DNS Requirements

When you add `tornadoai.com.au` in Vercel, it will show you **specific DNS records** that must be added at your domain registrar. This guide explains how to configure them.

## Step-by-Step DNS Configuration

### Step 1: Check What Vercel Requires

In Vercel Dashboard → Your Project → Settings → Domains → `tornadoai.com.au`, you'll see one of these configurations:

#### Configuration A: A Record (Most Common)
```
Type: A
Name: @ (or tornadoai.com.au)
Value: [IP address shown by Vercel, usually 76.76.21.21]
TTL: 3600 (or Auto)
```

#### Configuration B: CNAME Record (Alternative)
```
Type: CNAME
Name: @ (or tornadoai.com.au)
Value: [CNAME shown by Vercel, usually cname.vercel-dns.com]
TTL: 3600 (or Auto)
```

**Important**: Some registrars (GoDaddy, Namecheap, etc.) **DO NOT allow CNAME on root domain (@)**. If you see this error, use the A record instead or ask Vercel support for A record values.

### Step 2: Configure at Your Domain Registrar

#### Common Registrars Setup:

**GoDaddy:**
1. Log in → My Products → DNS
2. Find "Records" section
3. For A Record:
   - Click "Add" → Select "A"
   - Name: `@`
   - Value: `76.76.21.21` (or value Vercel shows)
   - TTL: `600` seconds
4. Remove any conflicting A records for `@`

**Namecheap:**
1. Log in → Domain List → Manage → Advanced DNS
2. Rey Records section
3. For A Record:
   - Click "Add New Record"
   - Type: `A Record`
   - Host: `@`
   - Value: `76.76.21.21` (or value Vercel shows)
   - TTL: Automatic

**Cloudflare:**
1. Select domain → DNS → Records
2. Add A record:
   - Type: `A`
   - Name: `@`
   - IPv4 address: `76.76.21.21` (or value Vercel shows)
   - Proxy status: **DNS only** (gray cloud) - IMPORTANT!
3. Remove proxying (orange cloud) for Vercel to verify

**Other Registrars:**
- Look for "DNS Management", "DNS Settings", or "Advanced DNS"
- Add the exact record type, name, and value shown by Vercel

### Step 3: Optional - Add WWW Subdomain

If you want `www.tornadoai.com.au` to work:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Step 4: Remove Conflicting Records

**Before adding new records, remove:**
- Old A records pointing to other IPs
- Old CNAME records
- Any ALIAS records that conflict
- Any redirect rules that might interfere

### Step 5: Verify DNS Configuration

After adding records, wait 5-10 minutes, then check:

1. **In Vercel Dashboard:**
   - Go to Settings → Domains
   - Click "Refresh" next to your domain
   - Status should change from "Invalid Configuration" to "Valid Configuration"

2. **Using DNS Checker:**
   - Visit: https://dnschecker.org
   - Query type: `A`
   - Hostname: `tornadoai.com.au`
   - Should show: `76.76.21.21` (or your Vercel IP) globally

3. **Using Command Line:**
   ```powershell
   nslookup tornadoai.com.au
   # Should return the Vercel IP address
   ```

## Common Issues and Solutions

### Issue: "Invalid Configuration" Error

**Causes:**
- DNS records not added yet (wait 5-10 minutes)
- Wrong record type (using CNAME when A is required)
- Conflicting records (multiple A records)
- DNS caching (clear your DNS cache)
- Proxying enabled (Cloudflare orange cloud)

**Solutions:**
1. Double-check the exact values Vercel shows
2. Ensure only ONE A record for `@`
3. Remove any CNAME on root domain if registrar doesn't support it
4. Disable Cloudflare proxying (use DNS only/gray cloud)
5. Wait 10-15 minutes for DNS propagation
6. Click "Refresh" in Vercel dashboard

### Issue: Registrar Doesn't Support CNAME on Root Domain

**Solution:** Contact Vercel support or use A record instead:
- Email: support@vercel.com
- Request A record IP address for your domain
- Or check Vercel docs for latest IP addresses

### Issue: DNSSEC Conflicts

If your domain has DNSSEC enabled:
1. Temporarily disable DNSSEC at registrar
2. Add Vercel DNS records
3. Wait for Vercel to verify
4. Re-enable DNSSEC if needed (Vercel supports it)

## After DNS is Valid

Once Vercel shows "Valid Configuration":
- SSL certificate will be automatically provisioned (1-24 hours)
- You'll receive an email when domain is ready
- Your site will be live at `https://tornadoai.com.au`

## Quick Reference

**Minimum Required Record:**
```
Type: A
Name: @
Value: [Vercel IP - check your Vercel dashboard]
```

**For WWW (Optional):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Need Help?

- **Vercel Support**: support@vercel.com
- **DNS Checker**: https://dnschecker.org
- **Vercel Docs**: https://vercel.com/docs/concepts/projects/domains

