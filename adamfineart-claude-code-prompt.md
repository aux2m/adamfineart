# Claude Code Prompt: Build AdamFineArt.com

## Project Overview

Build a complete fine art e-commerce website for **AdamFineArt.com** modeled after Noah Fine Art (noahfineart.com / shop.noahfineart.com). The site should be a modern Next.js application with integrated e-commerce functionality, styled to match the clean, artistic aesthetic of the reference site.

---

## Reference Site Analysis

The reference site (Noah Fine Art) has these key characteristics:

### Visual Design
- **Color Scheme**: Dark/black backgrounds with white text, accent colors for CTAs
- **Typography**: Clean sans-serif fonts, large bold headings for collection names
- **Aesthetic**: Premium art gallery feel, lots of whitespace, product-focused
- **Logo**: Minimalist compass/monogram style logo

### Site Structure
1. **Main Landing/Home Page** - Hero carousel, featured collections, category grid
2. **Shop/Collections** - Filterable product grid with multiple categories
3. **Product Pages** - Image gallery, pricing, variants, add to cart
4. **About Page** - Artist bio and story
5. **Contact Page** - Contact form
6. **Newsletter/VIP Signup** - Email capture for discounts

---

## Technical Requirements

### Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **E-commerce**: Stripe for payments OR Shopify Storefront API integration
- **Database**: PostgreSQL with Prisma (for custom) OR Shopify backend
- **Hosting**: Vercel-ready
- **CMS**: Optional - Sanity or Contentful for dynamic content

### Core Features to Implement

#### 1. Navigation Header
```
[Logo: "Adam Fine Art" stylized]

Menu Items:
- All Collections (dropdown)
  - Murals
  - Canvas Prints
  - Originals
  - Commissions
  - Interactive Art
  - Merchandise
- About
- Events
- Contact
- [Shopping Cart Icon with count]
- [Account/Login]
```

#### 2. Home Page Sections
- **Hero Carousel/Slider** - Full-width rotating banners with CTAs
- **Featured Collection** - Scrollable product cards (8 items)
- **Category Grid** - Visual category thumbnails (6-8 categories)
- **Newsletter Popup/Banner** - "Join VIP list for 15% off first order"

#### 3. Shop/Collections Page
- **Filter Sidebar**: Availability, Price Range
- **Sort Dropdown**: Featured, Best Selling, A-Z, Price Low-High, etc.
- **Product Grid**: Responsive grid with hover effects
- **Pagination**: Page numbers with next/prev

#### 4. Product Card Component
```jsx
// Each product card should have:
- Primary image (with secondary on hover)
- Product title
- Price (with sale price if applicable)
- Star rating if reviews exist
- Quick-add functionality
```

#### 5. Product Detail Page
- Image gallery with thumbnails
- Title, price, description
- Variant selectors (size, frame type, etc.)
- Quantity selector
- Add to Cart button
- Product details/specifications
- Related products section

#### 6. Shopping Cart
- Slide-out drawer cart
- Line items with quantity adjustment
- Remove item functionality
- Subtotal calculation
- "Shipping calculated at checkout" note
- Checkout button

#### 7. Footer
```
Quick Links:
- Contact Us
- Newsletter  
- Privacy Policy
- Terms of Service
- Refund Policy

Social Links:
- Facebook
- Instagram
- Twitter/X
- YouTube

Payment Icons:
- Visa, Mastercard, Amex, Apple Pay, Google Pay, PayPal

Copyright © 2025 Adam Fine Art
```

---

## Special Pages for AdamFineArt.com

### Interactive Mural Landing Page (`/interactive-mural`)
Create a dedicated landing page for showcasing interactive mural projects:

```
Hero Section:
- Full-width hero with mural preview image/video
- Headline: "Experience Art That Comes Alive"
- Subheadline: "Interactive murals powered by augmented reality"
- CTA: "Explore the Mural" → links to /interactive-mural/experience

Features Section:
- Icon + text blocks explaining the interactive elements
- "Scan with your phone"
- "Watch the story unfold"
- "Hear the voices behind the art"

Gallery Section:
- Grid of mural project previews
- Each links to detailed project page or experience

Process Section:
- How interactive murals are created
- Commission inquiry CTA
```

### Interactive Mural Experience Page (`/interactive-mural/experience`)
**Note: This page will be developed separately and merged later.**
For now, create a placeholder page with:
- "Coming Soon" messaging
- Email signup for launch notification
- Brief description of what visitors will experience

---

## Product Categories to Set Up

```javascript
const collections = [
  {
    name: "Murals",
    slug: "murals",
    description: "Large-scale public and private mural works"
  },
  {
    name: "Canvas Prints",
    slug: "canvas-prints", 
    description: "Museum-quality giclée prints on canvas"
  },
  {
    name: "Originals",
    slug: "originals",
    description: "One-of-a-kind original paintings"
  },
  {
    name: "Commissions",
    slug: "commissions",
    description: "Custom artwork created for you"
  },
  {
    name: "Interactive Art",
    slug: "interactive-art",
    description: "AR-enhanced art experiences"
  },
  {
    name: "Merchandise",
    slug: "merchandise",
    description: "Apparel, accessories, and collectibles"
  },
  {
    name: "She Power Collection",
    slug: "she-power",
    description: "Celebrating powerful women in history"
  }
];
```

---

## Design Specifications

### Color Palette
```css
:root {
  --color-background: #000000;
  --color-background-alt: #1a1a1a;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a0a0a0;
  --color-accent: #d4af37; /* Gold accent for premium feel */
  --color-accent-hover: #e5c349;
  --color-success: #22c55e;
  --color-error: #ef4444;
}
```

### Typography
```css
/* Headings */
font-family: 'Playfair Display', serif; /* or similar elegant serif */

/* Body */
font-family: 'Inter', sans-serif; /* or similar clean sans-serif */
```

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## File Structure

```
adamfineart/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Home
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── events/
│   │   └── page.tsx
│   ├── collections/
│   │   ├── page.tsx                # All products
│   │   └── [slug]/
│   │       └── page.tsx            # Category page
│   ├── products/
│   │   └── [slug]/
│   │       └── page.tsx            # Product detail
│   ├── cart/
│   │   └── page.tsx
│   ├── checkout/
│   │   └── page.tsx
│   ├── interactive-mural/
│   │   ├── page.tsx                # Landing page
│   │   └── experience/
│   │       └── page.tsx            # Placeholder for AR experience
│   └── api/
│       ├── products/
│       ├── cart/
│       └── checkout/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   ├── home/
│   │   ├── HeroCarousel.tsx
│   │   ├── FeaturedCollection.tsx
│   │   └── CategoryGrid.tsx
│   ├── product/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductGallery.tsx
│   │   └── ProductInfo.tsx
│   ├── cart/
│   │   ├── CartDrawer.tsx
│   │   ├── CartItem.tsx
│   │   └── CartSummary.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       └── Modal.tsx
├── lib/
│   ├── shopify.ts                  # Shopify Storefront API helpers
│   ├── stripe.ts                   # Stripe helpers
│   └── utils.ts
├── types/
│   └── index.ts
├── public/
│   ├── images/
│   └── fonts/
├── tailwind.config.ts
└── package.json
```

---

## Implementation Order

### Phase 1: Foundation
1. Initialize Next.js project with Tailwind
2. Set up global styles and design tokens
3. Create Header and Footer components
4. Build responsive navigation with mobile menu
5. Set up basic routing structure

### Phase 2: Home Page
1. Hero carousel component with CTA overlays
2. Featured collection product slider
3. Category grid with thumbnails
4. Newsletter signup modal/banner

### Phase 3: Shop Functionality
1. Product listing page with filters/sort
2. Product detail page
3. Shopping cart drawer
4. Cart page (full page view)

### Phase 4: E-commerce Integration
Choose ONE approach:

**Option A: Shopify Storefront API**
- Connect to Shopify backend
- Use their checkout
- Products managed in Shopify admin

**Option B: Custom with Stripe**
- PostgreSQL + Prisma for products
- Stripe Checkout for payments
- Admin panel for product management

### Phase 5: Special Pages
1. About page
2. Contact page with form
3. Events page
4. Interactive Mural landing page
5. Interactive Mural experience placeholder

### Phase 6: Polish
1. Loading states and skeletons
2. Error handling
3. SEO optimization
4. Performance optimization
5. Analytics integration

---

## Sample Product Data for Development

```javascript
const sampleProducts = [
  {
    id: "1",
    title: "She Power - Limited Edition Print",
    slug: "she-power-limited-edition",
    price: 295.00,
    compareAtPrice: null,
    images: [
      "/images/products/she-power-1.jpg",
      "/images/products/she-power-2.jpg"
    ],
    collection: "she-power",
    description: "Limited edition giclée print from the She Power mural series...",
    variants: [
      { id: "v1", title: "16x20 Unframed", price: 295.00 },
      { id: "v2", title: "16x20 Framed", price: 445.00 },
      { id: "v3", title: "24x30 Unframed", price: 495.00 },
      { id: "v4", title: "24x30 Framed", price: 695.00 }
    ],
    available: true,
    featured: true
  },
  // Add more sample products...
];
```

---

## Key Components to Match Reference Site

### Hero Carousel
- Full-width slides with background images
- Text overlay with headline and CTA button
- Dot indicators or arrows for navigation
- Auto-advance with pause on hover

### Product Card Hover Effect
```css
/* On hover: */
- Secondary image fades in
- Slight scale transform (1.02)
- Quick add button appears (optional)
```

### Cart Drawer
- Slides in from right
- Dark overlay on rest of page
- Close button (X) and "Continue Shopping"
- Scrollable product list
- Fixed footer with total and checkout button

### Newsletter Popup
- Triggered after 5 seconds or on exit intent
- Offers discount code for signup
- Email input + subscribe button
- "No thanks" dismiss option
- Cookie to prevent repeat display

---

## Environment Variables Needed

```env
# Shopify (if using)
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=

# Stripe (if using)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# Database (if custom)
DATABASE_URL=

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

---

## Commands to Get Started

```bash
# Create the project
npx create-next-app@latest adamfineart --typescript --tailwind --eslint --app --src-dir=false

# Navigate to project
cd adamfineart

# Install additional dependencies
npm install @stripe/stripe-js stripe lucide-react @headlessui/react framer-motion swiper

# For Shopify integration (if using)
npm install @shopify/hydrogen-react

# Start development
npm run dev
```

---

## Notes for Interactive Mural Integration

The `/interactive-mural/experience` page will eventually contain:
- AR.js or 8th Wall integration for augmented reality
- Video overlays triggered by marker detection  
- Audio playback with narratives
- Interactive hotspots on the mural image
- Social sharing functionality

**For now, create this as a placeholder page that can be replaced with the full experience later.**

---

## Success Criteria

- [ ] Site matches the premium art gallery aesthetic of Noah Fine Art
- [ ] All navigation and pages are functional
- [ ] Products can be browsed by category
- [ ] Shopping cart functionality works
- [ ] Mobile-responsive across all pages
- [ ] Newsletter signup captures emails
- [ ] Interactive mural landing page effectively promotes the feature
- [ ] Site is performant (90+ Lighthouse score)
- [ ] SEO basics are in place (meta tags, OG images, sitemap)

---

## Questions to Answer Before Building

1. **E-commerce backend**: Shopify or custom Stripe integration?
2. **Product inventory**: How many products initially? What categories are priority?
3. **Payment methods**: Stripe only, or also PayPal, Apple Pay, etc.?
4. **Email service**: Mailchimp, ConvertKit, or custom for newsletter?
5. **Analytics**: Google Analytics, Plausible, or other?
6. **Domain/Hosting**: Is AdamFineArt.com already registered and pointed to Vercel?

---

*Ready to build when you are. Run this prompt in Claude Code and we'll create your fine art e-commerce empire.*
