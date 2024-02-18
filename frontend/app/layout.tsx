import './globals.css'
import type { Metadata, Viewport } from 'next'
import NavBar from '@/lib/components/nav-bar'

const APP_NAME = "COMPARA";
const APP_DEFAULT_TITLE = "COMPARA";
const APP_TITLE_TEMPLATE = "%s - COMPARA";
const APP_DESCRIPTION = "Compara preços entre diferentes supermercados e encontra o melhor preço para os teus produtos favoritos.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html>
      <body className="h-full bg-[#e6f7cd]">
        {children}
        <NavBar />
      </body>
    </html>
  )
}