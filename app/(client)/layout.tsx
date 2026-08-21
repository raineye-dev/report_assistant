import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "@/components/navbar";

const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "한영대학교 AI기반 산학연 통합시스템",
  description: "한영대학교 AI기반 산학연 통합시스템",
  icons: {
    icon: "/images/logo_meta.png",
  },
  openGraph: {
    title: "한영대학교 AI기반 산학연 통합시스템",
    description: "한영대학교 AI기반 산학연 통합시스템",
    images: [
      {
        url: "/images/logo_meta.png",
        width: 1200,
        height: 630,
        alt: "한영대학교 AI기반 산학연 통합시스템",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "한영대학교 AI기반 산학연 통합시스템",
    description: "한영대학교 AI기반 산학연 통합시스템",
    images: ["/images/logo_meta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="light"
        >
          <div className="max-h-screen w-full max-w-[1440px] mx-auto bg-[#FBFCFD]">
            <Navbar />
            <main className="min-h-[calc(100vh-131px)]">{children}</main>
          </div>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
