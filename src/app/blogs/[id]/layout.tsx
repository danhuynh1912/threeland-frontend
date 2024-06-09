import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Threeland Travel Blog- Your guide to Indochina',
  applicationName: 'Threeland Travel',
  description: 'This is description about the page',
  keywords: ['travel', 'Vietnam', 'tour', 'destination'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
