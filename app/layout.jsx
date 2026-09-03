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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
