import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Roboto_Condensed } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  weight: ["300", "400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Damián Spirollari – Especialista en Clasificación Arancelaria",
  description:
    "Damián Spirollari es un Analista de Comercio Exterior con siete años de experiencia, especializado en clasificación arancelaria. Ha trabajado en empresas globales como Google y General Electric, ofreciendo eficiencia y cumplimiento en operaciones internacionales.",
  keywords: [
    "Clasificación Arancelaria",
    "Comercio Exterior",
    "Damián Spirollari",
    "Consultoría Aduanera",
    "Google",
    "General Electric",
  ],
  openGraph: {
    title: "Damián Spirollari – Especialista en Clasificación Arancelaria",
    description:
      "Consultor de Comercio Exterior con experiencia en clasificación arancelaria, normativa aduanera y gestión de operaciones internacionales.",
    url: "https://bussines-card-nine.vercel.app/",
    siteName: "Damián Spirollari",
    images: [
      {
        url: "/modern-logistics-scene-with-cargo-containers--carg.jpg",
        width: 1200,
        height: 630,
        alt: "Clasificación arancelaria – comercio exterior",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${robotoCondensed.variable}`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
