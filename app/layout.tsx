import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://playdadline.com'),
  title: 'DADLINE: Family Rush — Coming Soon',
  description: 'Run the day. Be the best Dad. Join the DADLINE: Family Rush launch waitlist.',
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    title: 'DADLINE: Family Rush — Coming Soon',
    description: 'Every errand is a mission. Join the launch waitlist.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'DADLINE: Family Rush — Coming Soon' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DADLINE: Family Rush — Coming Soon',
    description: 'Every errand is a mission. Join the launch waitlist.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
