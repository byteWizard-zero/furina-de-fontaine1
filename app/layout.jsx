import { Playfair_Display, Geist } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://furina-de-fontaine1.vercel.app'),
  title: 'The Court of Fontaine | Hall of Supreme Judgment',
  description:
    "Step before the Oratrice Mécanique d'Analyse Cardinale. Lady Furina de Fontaine, Regina of All Waters, Kindreds, Peoples and Laws, convenes supreme judgment upon mortals and gods alike. State your plea before the grand opera bench, or be dissolved beneath the relentless weight of Fontaine's divine justice.",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'The Court of Fontaine | Hall of Supreme Judgment',
    description:
      "Step before the Oratrice Mécanique d'Analyse Cardinale. Lady Furina de Fontaine, Regina of All Waters, Kindreds, Peoples and Laws, convenes supreme judgment upon mortals and gods alike. State your plea before the grand opera bench, or be dissolved beneath the relentless weight of Fontaine's divine justice.",
    url: 'https://furina-de-fontaine1.vercel.app/',
    siteName: 'The Court of Fontaine',
    images: [
      {
        url: '/furina.webp',
        width: 736,
        height: 414,
        alt: "Lady Furina de Fontaine presiding over the Court of Fontaine",
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Court of Fontaine | Hall of Supreme Judgment',
    description:
      "Lady Furina de Fontaine convenes supreme judgment upon mortals and gods alike. State your plea, or be dissolved beneath the relentless weight of divine justice.",
    images: ['/furina.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${geist.variable}`}>
      <body>
        {/* Liquid Glass SVG Displacement Filter */}
        <svg
          width="0"
          height="0"
          style={{ position: 'absolute', pointerEvents: 'none', zIndex: -1, opacity: 0 }}
          aria-hidden="true"
        >
          <defs>
            <filter id="displacementFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.012"
                numOctaves="2"
                result="turbulence"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="28"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
        {/* Rock-Solid Pinned Background Layer: img1 for desktop, img2 for mobile */}
        <div className="site-bg-layer" aria-hidden="true">
          <picture className="site-bg-picture">
            <source
              media="(min-aspect-ratio: 1/1), (min-width: 800px)"
              srcSet="/img1.png"
            />
            <img
              src="/img2.png"
              alt=""
              className="site-bg-image"
              loading="eager"
              decoding="async"
            />
          </picture>
          <div className="site-bg-vignette" />
        </div>

        {children}
        <Analytics />
      </body>
    </html>
  );
}
