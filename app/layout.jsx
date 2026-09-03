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
  title: 'The Court of Fontaine',
  description: "Oratrice Mécanique d'Analyse Cardinale — An interactive AI experience in the heart of Fontaine.",
  openGraph: {
    title: 'The Furina Court',
    description: 'An interactive AI experience in the heart of Fontaine.',
    url: 'https://furina-de-fontaine1.vercel.app/',
    siteName: 'Furina Court',
    images: [
      {
        url: '/og-Furina.jpeg',
        width: 1200,
        height: 630,
        alt: "Lady Furina's dramatic courtroom interface",
      },
    ],
    type: 'website',
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
