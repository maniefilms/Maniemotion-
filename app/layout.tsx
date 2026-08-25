import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'MANIEMOTION — Motion design that makes ideas move.', template: '%s | MANIEMOTION' },
  description: 'Premium motion design for SaaS, technology companies, products and brands.',
  keywords: ['motion designer', 'motion design studio', 'motion graphics', 'SaaS video', 'product animation', 'explainer video', 'brand motion', 'technology video'],
  metadataBase: new URL('https://maniemotion.com'),
  alternates: { canonical: '/' },
  openGraph: { title: 'MANIEMOTION', description: 'Motion design that makes ideas move.', type: 'website', url: 'https://maniemotion.com' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
