import type React from "react"
import type { Metadata, Viewport } from "next"
import { site } from "@/config/site"
import Script from "next/script"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { NavigationAnalytics } from "@/components/analytics/navigation-analytics"
import { analytics } from "@/config/analytics"

const SITE_URL = site.url
const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`
const PROFILE_PAGE_ID = `${SITE_URL}/#webpage`

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Anuj Dhanuka",
      url: SITE_URL,
      image: `${SITE_URL}/anuj_profile_pic.png`,
      jobTitle: "Software Engineer",
      description: site.description,
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
        "Next.js",
        "React Native",
        "JavaScript",
        "TypeScript",
        "Frontend Development",
        "Mobile App Development",
        "Responsive Design",
        "Product UI",
        "WordPress",
        "Shopify",
      ],
      sameAs: [site.linkedIn, site.github],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Anuj Dhanuka Portfolio",
      description:
        "Portfolio of Anuj Dhanuka — Software Engineer and Frontend Developer based in Gurugram, India, with React.js and React Native experience.",
      publisher: { "@id": PERSON_ID },
      inLanguage: site.locale,
    },
    {
      "@type": "ProfilePage",
      "@id": PROFILE_PAGE_ID,
      url: SITE_URL,
      name: "Anuj Dhanuka — Software Engineer & Frontend Developer",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      inLanguage: site.locale,
    },
  ],
}

// ✅ Separate metadata export
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords:
    "Software Engineer, Frontend Developer, React.js developer, React Native developer, JavaScript developer, mobile app developer, web developer, Anuj Dhanuka",
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
}

// ✅ Move viewport to separate export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale} suppressHydrationWarning data-scroll-behavior="smooth" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#7c3aed" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="uses-react" content="true" />
        {analytics.googleMeasurementId && <link rel="preconnect" href="https://www.googletagmanager.com" />}
        {analytics.matomoUrl && <link rel="preconnect" href={analytics.matomoUrl} crossOrigin="" />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="font-sans overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-white px-4 py-2 font-semibold text-brand-800 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && analytics.googleMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${analytics.googleMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${analytics.googleMeasurementId}');
              `}
            </Script>
          </>
        )}
        {process.env.NODE_ENV === "production" && analytics.matomoUrl && analytics.matomoSiteId && (
          <>
            <Script id="matomo-analytics" strategy="afterInteractive">
              {`
                var _paq = window._paq = window._paq || [];
                _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);
                (function() {
                  var u=${JSON.stringify(analytics.matomoUrl)};
                  _paq.push(['setTrackerUrl', u+'matomo.php']);
                  _paq.push(['setSiteId', '${analytics.matomoSiteId}']);
                  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                  g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                })();
              `}
            </Script>
          </>
        )}
        {process.env.NODE_ENV === "production" && (
          <NavigationAnalytics
            googleMeasurementId={analytics.googleMeasurementId}
            matomoEnabled={Boolean(analytics.matomoUrl && analytics.matomoSiteId)}
          />
        )}
      </body>
    </html>
  )
}
