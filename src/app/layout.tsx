import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import AuthProvider from '~/components/layout/NextAuth'
import ThemeProvider from '~/components/theme/ThemeWrapper'

export const metadata: Metadata = {
  title: "AI Offer Miner - Resume Builder",
  description: 'Create professional, ATS-friendly resumes for free. No watermarks, no hidden fees. AI-powered resume builder with modern templates.',
  keywords: 'resume builder, cv maker, free resume, ATS-friendly resume, AI resume builder, professional templates',
  authors: [{ name: 'Jeffery Xie', url: 'https://aioffer.miner.com' }],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <AuthProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
