import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// ✅ Separate metadata export
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://anujdhanuka.com"
      : "http://localhost:3004"
  ),
  title: "Anuj Dhanuka | Frontend & React Native Developer",
  description:
    "Frontend and React Native developer with experience delivering 20+ client projects and contributing across ChefKart's customer app, internal dashboard and website.",
  keywords:
    "Frontend developer, React Native developer, React developer, JavaScript developer, mobile app developer, web developer, Anuj Dhanuka",
  openGraph: {
    title: "Anuj Dhanuka | Frontend & React Native Developer",
    description:
      "Frontend and React Native developer with experience delivering 20+ client projects and contributing across ChefKart's customer app, internal dashboard and website.",
    url: "https://anujdhanuka.com",
    siteName: "Anuj Dhanuka Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anuj Dhanuka - Frontend & React Native Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Dhanuka | Frontend & React Native Developer",
    description:
      "Frontend and React Native developer with experience delivering 20+ client projects and contributing across ChefKart's customer app, internal dashboard and website.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://anujdhanuka.com",
  },
};

// ✅ Move viewport to separate export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#7c3aed" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="uses-react" content="true" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
