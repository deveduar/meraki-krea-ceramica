import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Merakikrea Cerámica | Clases y Tienda de Cerámica en Aljaraque, Huelva",
  description:
    "Somos docentes profesionales con más de veinte años de experiencia y pasión por lo que hacemos. Ofrecemos cursos semanales, intensivos y monográficos de cerámica en Aljaraque, Huelva.",
  keywords: [
    "cerámica",
    "clases de cerámica",
    "taller de cerámica",
    "Aljaraque",
    "Huelva",
    "cursos de cerámica",
    "tienda de cerámica",
  ],
  openGraph: {
    title: "Merakikrea Cerámica | Clases y Tienda de Cerámica en Aljaraque, Huelva",
    description:
      "Descubre nuestros cursos de cerámica y tienda con piezas únicas hechas a mano en Aljaraque, Huelva.",
    url: "https://meraki-krea-ceramica-six.vercel.app/",
    siteName: "Merakikrea Cerámica",
    images: [
      {
        url: "https://meraki-krea-ceramica-six.vercel.app/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Merakikrea Cerámica - Clases y Tienda",
      },
    ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Merakikrea Cerámica | Clases y Tienda de Cerámica",
  //   description:
  //     "Descubre nuestros cursos de cerámica y tienda con piezas únicas hechas a mano en Aljaraque, Huelva.",
  //   images: ["https://meraki-krea-ceramica-six.vercel.app/hero-1.jpg"],
  // },
  verification: {
    google: 'Nqj1AO8l1Vy5HWfbVpvOsx--E7EKTku-mDOtWjcwXfU',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
        <Head>
          <meta key="fb-app-id" property="fb:app_id" content="2087657141752058" />
          {/* <link rel="manifest" href="/site.webmanifest" /> */}
          <meta name="apple-mobile-web-app-title" content="Merakikrea" />
          {/* <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/> */}
        </Head>
        <body className={inter.className}>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
