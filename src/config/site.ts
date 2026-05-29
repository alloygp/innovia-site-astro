/**
 * src/config/site.ts
 * Single source of truth for site-wide SEO defaults.
 * Edit this file for each client — never hardcode these values elsewhere.
 */

export const SITE = {
  /** Canonical base URL — no trailing slash. Must match astro.config.mjs site: */
  url: 'https://innoviaco-op.com',

  /** Display name — used in og:site_name, JSON-LD, email footer */
  name: 'Innovia Co-op',

  /** Twitter/X handle — include the @ */
  twitterHandle: '@innoviacoop',

  /** og:locale */
  locale: 'en_US',

  /** Fallback <title> if a page doesn't pass its own */
  defaultTitle: 'Innovia Co-op — Short tagline here',

  /** Fallback meta description */
  defaultDescription: 'Innovia is a national cooperative of independent HOA and condo association management companies. HOA boards find better management; member CAM companies build something bigger together.',

  /**
   * Default OG image — place the file at public/assets/og.png
   * Dimensions: 1200×630px PNG, under 300KB
   */
  defaultOgImage: '/assets/og/option-1-type-led.png',
  ogImageWidth:  '1200',
  ogImageHeight: '630',

  /** Organization JSON-LD — emitted on every page */
  org: {
    type: 'LocalBusiness',         // or 'ProfessionalService', 'Organization', etc.
    telephone: '+1-XXX-XXX-XXXX',
    email: 'contact@innoviaco-op.com',
    addressLocality: 'City',
    addressRegion: 'TX',
    addressCountry: 'US',
    areaServed: 'United States',
    priceRange: '$$',
    logo: 'https://innoviaco-op.com/assets/logos/innovia-primary.png',
  },
} as const;
