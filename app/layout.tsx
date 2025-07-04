import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'FunnyNote UI',
  description: 'Phiên bản giao diện người dùng của FunnyNote',
  icons: {
    icon: '/funnynote-logo.png',
    apple: '/funnynote-logo.png',
  },
  openGraph: {
    title: 'FunnyNote UI',
    description: 'Phiên bản giao diện người dùng của FunnyNote',
    url: 'https://funnynote-ui.vercel.app',
    siteName: 'FunnyNote UI',
    images: [
      {
        url: '/funnynote-logo.png',
        width: 1200,
        height: 630,
        alt: 'FunnyNote Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
