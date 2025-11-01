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

---

## Reviews Widget Integration

### Overview
The reviews widget displays authentic customer reviews from Momence on the home page.

### Current Status
- **Status**: Mock implementation active
- **Component Location**: `/src/components/MomenceReviews.jsx`
- **Page Using Component**: `/src/pages/Home.jsx` (Yoga Lab brand only)

### What You'll Need from Yoga Lab Owner

1. **Momence Business ID** (same as booking widget)
2. **Reviews Embed Code** (from Momence dashboard)
   - Navigate to: Settings > Website Plugins > Reviews Widget
   - Copy the provided embed code

### Integration Steps

#### Step 1: Get Reviews Embed Code
Ask the Yoga Lab owner to:
1. Log into their Momence account at https://momence.com/login
2. Go to Settings > Website Plugins > Reviews Widget
3. Copy the embed code or confirm the Business ID

#### Step 2: Update MomenceReviews Component
Open `/src/components/MomenceReviews.jsx` and:

1. Replace the Business ID:
```javascript
const MOMENCE_BUSINESS_ID = 'yoga-lab-bloomington'; // Replace with actual ID
```

2. Set the mock flag to false:
```javascript
const USE_MOCK = false; // Enable real widget
```

3. Choose implementation method (iframe or JavaScript) based on what Momence provides

#### Step 3: Test the Integration
1. Save the changes
2. Navigate to the home page (with Yoga Lab brand active)
3. Scroll to "What Our Community Says" section
4. Verify reviews load correctly
5. Test responsive behavior on different screen sizes

### Common Momence Reviews Embed Formats

#### Format 1: iframe Embed
```html
<iframe 
  src="https://momence.com/reviews/[YOUR-BUSINESS-ID]" 
  width="100%" 
  height="600px"
  frameBorder="0"
/>
```

#### Format 2: JavaScript Widget
```html
<script src="https://momence.com/plugin/reviews-[YOUR-BUSINESS-ID].js"></script>
<div id="momence-reviews"></div>
```

### Customization Options

#### Height Adjustment
If the reviews widget is cut off or has too much white space, adjust the height in the iframe:
```javascript
height="800px"  // Increase if content is cut off
height="400px"  // Decrease if too much white space
```

#### Styling
The widget is wrapped in a container with:
- Rounded corners
- Shadow effect
- Border
- Maximum width of 5xl for better readability

### Troubleshooting

#### Widget doesn't load
- Verify the Business ID is correct
- Check if reviews are enabled in Momence dashboard
- Look for errors in browser console
- Ensure there are published reviews in Momence

#### Reviews appear but look broken
- Check if Momence provides specific iframe dimensions
- Verify the URL format matches Momence's documentation
- Try the JavaScript widget method instead of iframe

#### Reviews widget appears on Lab Coffee brand
- This is controlled by the `!isLabCoffee` condition in Home.jsx
- Reviews only show when Yoga Lab brand is active

### Display Behavior

- **Yoga Lab Brand**: Reviews section displays between "Our Services" and "Find Us & Connect"
- **Lab Coffee Brand**: Reviews section is hidden
- **Mobile**: Widget is responsive and adjusts to screen size

### Support Resources

- **Momence Help Center**: https://help.momence.com/
- **Momence Support**: Contact through your Momence dashboard
- **Reviews Widget Documentation**: Check Momence dashboard > Settings > Website Plugins

````
