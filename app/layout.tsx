import type { Metadata } from 'next';
import { IBM_Plex_Serif, Poppins } from 'next/font/google';
import './globals.css';

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FIDE Impact Lab - Empowering Growth Through Learning',
  description: 'A capacity development organization equipping individuals, teams and organizations with industry-relevant skills and expertise to unlock growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${ibmPlexSerif.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}