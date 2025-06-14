import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "react-hot-toast";
import DarkModeToggle from '@/components/DarkModeToggle'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News Dashboard & Payout System",
  description: "A comprehensive dashboard for news management and payout calculations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gray-100 dark:bg-gray-900'}>
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
        <DarkModeToggle />
      </body>
    </html>
  );
}
