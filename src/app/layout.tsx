import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollRestorer from "@/components/ScrollRestorer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

type Props = {
  children: React.ReactNode;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "##ffffff",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Haqqi",
    template: `%s | Haqqi`,
  },
  description:
    "Meet Haqqi, a Jakarta-based Software Engineer with over 7 years of experience in building scalable applications. Explore his work, side projects, and professional journey.",
  metadataBase: new URL(BASE_URL),
  authors: [
    {
      name: "Haqqi",
      url: BASE_URL,
    },
  ],
  keywords: [
    "Haqqi",
    "Portofolio",
    "Software Engineer",
    "Android Developer",
    "Backend Engineer",
    "Full-stack Developer",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-geist-sans bg-white overflow-y-scroll overscroll-none dark:bg-zinc-900">
        <ScrollRestorer />
        <ThemeProvider defaultTheme="system" storageKey="theme">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
