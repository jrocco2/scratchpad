# Deployment Guide

## Quick Deploy to Vercel (Recommended - 2 minutes)

The fastest way to see your app live is to deploy it directly from GitHub to Vercel:

### Step 1: Visit Vercel
Go to: **https://vercel.com/new**

### Step 2: Import Your Repository
1. Sign in with your GitHub account (if not already signed in)
2. Click "Import Git Repository"
3. Search for or select: `jrocco2/scratchpad`
4. Click "Import"

### Step 3: Configure Project
Vercel will automatically detect this is a Next.js project and configure everything:
- **Framework Preset**: Next.js (auto-detected)
- **Build Command**: `npm run build` (auto-configured)
- **Output Directory**: `.next` (auto-configured)
- **Install Command**: `npm install` (auto-configured)

### Step 4: Deploy
1. Click "Deploy"
2. Wait 1-2 minutes for the build to complete
3. You'll get a live URL like: `https://scratchpad-xxx.vercel.app`

That's it! Your Hello World app will be live and accessible worldwide.

---

## Alternative: Deploy via Vercel CLI

If you prefer using the command line:

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
cd /path/to/scratchpad
vercel --prod
```

The CLI will guide you through the process and give you a deployment URL.

---

## What You'll See

Once deployed, you'll see a beautiful page with:
- A gradient background (blue to indigo)
- Large "Hello World!" heading
- "Welcome to your Next.js application" subtitle
- Responsive design that works on all devices
- Dark mode support

---

## Automatic Deployments

After the initial deployment, Vercel will automatically:
- Deploy every push to the `main` branch to production
- Create preview deployments for pull requests
- Provide unique URLs for each deployment

---

## Need Help?

If you encounter any issues:
1. Check the [Vercel Documentation](https://vercel.com/docs)
2. View build logs in the Vercel dashboard
3. Ensure your GitHub repository is public or connected to Vercel
