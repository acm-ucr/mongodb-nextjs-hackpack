/* eslint-disable new-cap */
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MongoDB Next.js Hackpack",
  description: "MongoDB Setup Integration with Next.js",
};

type Prop = {
  children: string;
};

export default function RootLayout({ children }: Prop) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
