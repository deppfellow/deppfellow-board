import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "500"],
});

export const metadata: Metadata = {
  title: "Deppfellow's Board",
  description: "Find and read latest news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased bg-[#121212] text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
