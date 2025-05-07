import type { Metadata } from "next";
import { Work_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/index.scss";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/providers/QueryProvider";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lendsqr Admin",
  description: "Admin dashboard for Lendsqr",
  icons: {
    icon: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1746494564/Screenshot_2025-05-06_022215_ovqhi0.png",
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
        className={`${workSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <AuthProvider>
            {children}
            <Toaster position="top-right" />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
