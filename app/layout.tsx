import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LealDev | Desenvolvedor Full Stack",
  description: "Transformo ideias em experiencias digitais incriveis. Desenvolvedor Full Stack especializado em criar solucoes web modernas e eficientes.",
  keywords: ["desenvolvedor", "full stack", "web", "react", "next.js", "portfolio"],
  authors: [{ name: "Fabricio Leal" }],
  openGraph: {
    title: "LealDev | Desenvolvedor Full Stack",
    description: "Transformo ideias em experiencias digitais incriveis.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
