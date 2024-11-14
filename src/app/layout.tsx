import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'Finance',
  description: 'Financial planification tool',
};

const publicSans = localFont({
  src: './fonts/PublicSansVF.ttf',
  variable: '--font-public-sans',
  weight: '300 500 700',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full lg:h-full">
      <body
        className={`grid grid-cols-1 lg:grid-cols-desktop grid-rows-1 h-full overflow-auto lg:overflow-hidden bg-pistachio ${publicSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
