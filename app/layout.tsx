import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  variable: "--font-typewriter",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sayalo - A Special Question",
  description: "A romantic interactive experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
