import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fractional QA & Risk-Based Testing for Startups',
  description:
    'Risk-based QA consulting for early-stage SaaS teams. Prevent production failures and ship with confidence.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
