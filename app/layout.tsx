import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    default: "Moses Dagi | Software Developer",
    template: "%s | Moses Dagi",
  },
  description:
    "Moses Dagi is a Software Engineer and IT professional specializing in React, Flutter, Node.js, and full-stack development. Founder of NodeTech, building scalable web and mobile solutions.",
  keywords: [
    "Moses Dagi",
    "Moses Dagi Software Developer",
    "NodeTech",
    "Node Tech Solutions",
    "Flutter Developer Nigeria",
    "Node.js Developer",
    "React Developer",
    "React.js Developer",
    "Full Stack Developer",
    "Cross-Platform Developer",
    "IT Officer",
  ],
  authors: [{ name: "Moses Dagi" }],
  creator: "Moses Dagi",
  metadataBase: new URL("https://mosesdagi.vercel.app"),

  openGraph: {
    title: "Moses Dagi | Software Developer",
    description:
      "Portfolio of Moses Dagi — Software Developer specializing in React, Flutter, Node.js, and scalable digital solutions.",
    url: "https://mosesdagi.vercel.app",
    siteName: "Moses Dagi Portfolio",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moses Dagi | Software Developer",
    description:
      "Portfolio of Moses Dagi — Software Developer specializing in React, Flutter, Node.js, and scalable digital solutions.",
    images: ["/og-image.png"],
  },
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
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
