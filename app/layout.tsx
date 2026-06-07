import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://anujdhanuka.com";
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_PAGE_ID = `${SITE_URL}/#webpage`;

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Anuj Dhanuka",
      url: SITE_URL,
      image: `${SITE_URL}/anuj_profile_pic.png`,
      jobTitle: "Frontend & React Native Developer",
      description:
        "Frontend and React Native developer with experience delivering 20+ client projects and contributing across ChefKart's customer app, internal dashboard and website.",
      worksFor: {
        "@type": "Organization",
        name: "ChefKart",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Satya Institute Of Technology And Management",
      },
      knowsAbout: [
        "React.js",
        "React Native",
        "JavaScript",
        "TypeScript",
        "Frontend Development",
        "Mobile App Development",
        "Responsive Design",
      ],
      sameAs: [
        "https://linkedin.com/in/anuj-dhanuka",
        "https://github.com/Anuj-Dhanuka",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Anuj Dhanuka Portfolio",
      description:
        "Portfolio of Anuj Dhanuka — frontend and React Native developer based in Gurugram, India.",
      publisher: { "@id": PERSON_ID },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": PROFILE_PAGE_ID,
      url: SITE_URL,
      name: "Anuj Dhanuka — Frontend & React Native Developer",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      inLanguage: "en-US",
    },
  ],
};

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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Dhanuka | Frontend & React Native Developer",
    description:
      "Frontend and React Native developer with experience delivering 20+ client projects and contributing across ChefKart's customer app, internal dashboard and website.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
