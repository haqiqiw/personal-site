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

const META_DEFAULT_TITLE = "Haqqi | Software Engineer";
const META_DEFAULT_DESCRIPTION =
  "Software Engineer with over 7 years of experience in building scalable applications. Explore Haqqi's work, side projects, and professional journey.";

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
    default: META_DEFAULT_TITLE,
    template: `%s | Haqqi`,
  },
  description: META_DEFAULT_DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  authors: [
    {
      name: "Haqqi",
      url: new URL(BASE_URL),
    },
  ],
  keywords: [
    "Haqqi",
    "Software Engineer",
    "Android Developer",
    "Backend Engineer",
    "Full-stack Developer",
    "Personal Website",
    "Portofolio",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: META_DEFAULT_TITLE,
    description: META_DEFAULT_DESCRIPTION,
    siteName: "Haqqi's Personal Website",
    url: new URL(BASE_URL),
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/6845983",
        width: 460,
        height: 460,
        alt: META_DEFAULT_TITLE,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_DEFAULT_TITLE,
    description: META_DEFAULT_DESCRIPTION,
    images: ["https://avatars.githubusercontent.com/u/6845983"],
  },
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
