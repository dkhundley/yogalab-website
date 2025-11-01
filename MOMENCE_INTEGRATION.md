# Momence Booking Widget Integration Guide

## Overview
This document provides instructions for integrating the actual Momence booking widget into the Yoga Lab website.

## Current Status
- **Status**: Mock implementation active
- **Component Location**: `/src/components/MomenceWidget.jsx`
- **Page Using Component**: `/src/pages/Book.jsx`

## What You'll Need from Yoga Lab Owner

1. **Momence Business ID** (required)
   - This is typically found in the Momence dashboard URL
   - Format: `your-business-name` or a unique identifier

2. **Embed Code** (from Momence dashboard)
   - Navigate to: Settings > Website Plugins > Booking Widget
   - Copy the provided embed code

## Integration Steps

### Step 1: Get Credentials
Ask the Yoga Lab owner to:
1. Log into their Momence account at https://momence.com/login
2. Go to Settings > Website Plugins > Booking Widget
3. Copy the embed code or Business ID

### Step 2: Update MomenceWidget Component
Open `/src/components/MomenceWidget.jsx` and:

1. Replace the Business ID:
```javascript
const MOMENCE_BUSINESS_ID = 'yoga-lab-bloomington'; // Replace with actual ID
```

2. Set the mock flag to false:
```javascript
const USE_MOCK = false; // Enable real widget
```

3. (Optional) Adjust the iframe settings if needed:
   - Height: Default is 800px, adjust based on content
   - Additional parameters: Momence may provide specific URL parameters

### Step 3: Test the Integration
1. Save the changes
2. Run the dev server if not already running: `npm run dev`
3. Navigate to the Book page: http://localhost:5173/book
4. Verify the booking widget loads correctly
5. Test booking functionality

## Common Momence Embed Formats

### Format 1: Direct iframe
```html
<iframe 
  src="https://momence.com/m/[YOUR-BUSINESS-ID]" 
  width="100%" 
  height="800px"
  frameBorder="0"
/>
```

### Format 2: With additional parameters
```html
<iframe 
  src="https://momence.com/m/[YOUR-BUSINESS-ID]?embed=true&theme=light" 
  width="100%" 
  height="800px"
  frameBorder="0"
/>
```

### Format 3: JavaScript widget (if provided)
```html
<script src="https://momence.com/plugin/[YOUR-BUSINESS-ID].js"></script>
<div id="momence-widget"></div>
```

## Customization Options

### Styling
The widget container already has styling applied:
- Rounded corners
- Shadow
- Border
- Responsive width

To customize further, edit the component's className attributes.

### Height Adjustment
If the widget content is cut off or has too much white space:
```javascript
height="1000px"  // Increase if content is cut off
height="600px"   // Decrease if too much white space
```

### Remove Mock Notice
Once the real widget is active, you may want to remove or update the blue notice box in `Book.jsx`.

## Troubleshooting

### Widget doesn't load
- Check if the Business ID is correct
- Verify the Momence account is active
- Check browser console for errors
- Ensure iframe isn't blocked by browser extensions

### Widget shows but no classes appear
- Verify classes are published in Momence dashboard
- Check if there are any date/time filters applied
- Confirm the venue/location is set up correctly in Momence

### Styling issues
- Check if Momence provides theme parameters
- Adjust iframe dimensions
- Consider using Momence's responsive embed options

## Support Resources

- **Momence Help Center**: https://help.momence.com/
- **Momence Support**: Contact through your Momence dashboard
- **Widget Documentation**: Check Momence dashboard > Settings > Website Plugins

## Next Steps After Integration

1. Remove or update the mock notice banner
2. Test booking flow end-to-end
3. Verify email notifications are working
4. Test on mobile devices
5. Consider adding analytics tracking for bookings

## Notes

- The current implementation maintains all class descriptions and CTAs
- The mock schedule has been removed in favor of the widget
- The component is designed to be easily swappable between mock and real implementations
