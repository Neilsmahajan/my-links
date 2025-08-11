import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neil Mahajan — Links",
  description:
    "Find all my important links in one place: portfolio, GitHub, LinkedIn, Instagram, and X.",
  // metadataBase intentionally omitted for portability across deploy previews
  openGraph: {
    title: "Neil Mahajan — Links",
    description:
      "Find all my important links in one place: portfolio, GitHub, LinkedIn, Instagram, and X.",
    url: "/",
    siteName: "Neil Mahajan",
    images: [
      {
        url: "/profile-picture.jpeg",
        width: 800,
        height: 800,
        alt: "Neil Mahajan profile photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Neil Mahajan — Links",
    description:
      "Find all my important links in one place: portfolio, GitHub, LinkedIn, Instagram, and X.",
    images: ["/profile-picture.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
