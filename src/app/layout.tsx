import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aaliyah Harper - Portfolio',
  description: 'My personal portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-screen-xl">{children}</body>
    </html>
  );
}
