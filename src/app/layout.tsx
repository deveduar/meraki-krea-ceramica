import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Merakikrea Cerámica | Clases y Tienda de Cerámica en Aljaraque",
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
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
