import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dream Team Real Estate',
  description: 'Premium real estate brokerage experience for buyers, sellers, and investors.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
