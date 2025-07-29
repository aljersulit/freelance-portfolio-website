# Portfolio Website Cache Fix - Production Deployment Guide

## Problem Identified

Your portfolio website was experiencing content update issues in production because:

1. **Static Site Generation (SSG)**: Next.js was building pages statically at build time
2. **No Revalidation**: Changes in Payload CMS weren't triggering cache invalidation
3. **Vercel Caching**: Production pages were cached indefinitely without refresh triggers

## Solution Implemented

### 1. Dynamic Rendering Configuration

- Added `export const dynamic = 'force-dynamic'` to the main page
- Added `export const revalidate = 60` for ISR (Incremental Static Regeneration)
- This ensures content updates within 60 seconds maximum

### 2. Revalidation API Endpoint

- Created `/api/revalidate` endpoint that accepts POST requests
- Secured with Payload secret authentication
- Triggers cache invalidation for specific content types

### 3. Payload CMS Hooks

- Added `afterChange` hooks to all globals (Hero, AboutMe, Banner, Testimonials, FeaturedWorks)
- Automatically calls revalidation API when content is updated
- Only triggers in production environment

### 4. Optimized Caching Headers

- Configured Next.js headers for better cache control
- Prevents aggressive caching of dynamic content
- Maintains performance while ensuring freshness

## Environment Variables Required

Make sure these environment variables are set in your Vercel deployment:

```env
SERVER_URL=https://www.aljoydigital.com
PAYLOAD_SECRET=your-payload-secret
NODE_ENV=production
```

**Note**: Update `SERVER_URL` to match your actual domain. For local development, use `http://localhost:3000`.

## Deployment Steps

1. **Deploy to Vercel**: Push your changes to trigger a new deployment
2. **Verify Environment Variables**: Ensure all required env vars are set in Vercel dashboard
3. **Test Content Updates**:
   - Update content in Payload CMS admin panel
   - Wait up to 60 seconds
   - Refresh your website to see changes

## How It Works

### Automatic Revalidation Flow:

1. User updates content in Payload CMS
2. Payload triggers `afterChange` hook
3. Hook calls `/api/revalidate` endpoint
4. API invalidates Next.js cache
5. Next request serves fresh content

### Manual Revalidation:

You can also manually trigger revalidation by calling:

```bash
curl -X POST $SERVER_URL/api/revalidate \
  -H "Authorization: Bearer YOUR_PAYLOAD_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"global": "hero"}'
```

## Testing the Fix

1. **Local Testing**:

   - Run `npm run build && npm start` to test production mode locally
   - Update content and verify changes appear

2. **Production Testing**:
   - Deploy to Vercel
   - Update content in Payload admin
   - Check website updates within 60 seconds

## Monitoring

Check Vercel function logs to monitor revalidation calls:

- Go to Vercel Dashboard → Your Project → Functions
- Look for `/api/revalidate` function logs
- Verify successful revalidation calls

## Fallback Options

If immediate updates are critical, you can:

1. **Reduce revalidate time**: Change `export const revalidate = 60` to a lower value (e.g., 30 seconds)
2. **Force dynamic for all pages**: Add `export const dynamic = 'force-dynamic'` to more pages
3. **Manual revalidation**: Use the manual curl command above

## Performance Impact

- **Minimal**: ISR maintains performance while ensuring freshness
- **Smart caching**: Only revalidates when content actually changes
- **Optimized headers**: Prevents unnecessary cache misses

The solution balances performance with content freshness, ensuring your portfolio updates reliably in production while maintaining fast load times.
