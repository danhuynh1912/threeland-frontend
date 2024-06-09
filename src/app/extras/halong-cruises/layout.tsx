import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TOP 10 BEST HALONG BAY CRUISE DEALS RECOMMENDED FOR YOU',
  applicationName: 'Threeland Travel',
  description: 'This is description about the page',
  keywords: ['travel', 'Vietnam', 'tour', 'destination', 'halong', 'cruises'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
