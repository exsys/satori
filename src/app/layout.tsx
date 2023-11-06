import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const azonix = localFont({ src: "../assets/fonts/Azonix.otf" });

export const metadata: Metadata = {
  title: 'Satori | Perfect Analytics',
  description: 'This is a portfolio project by the full stack developer exsys',
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${azonix.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  )
}
