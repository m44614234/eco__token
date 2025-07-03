import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "ECO TOKEN",
  icons: {
    icon: [{ url: "/images/eco.jpg" }],
  },
};


const MagiceBerries = localFont({
  src: "../fonts/MagiceBerries-Regular.otf",
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MagiceBerries.className}`}>
        <ToastContainer />
        <div
          className="absolute h-full w-full  z-[-1]"
          style={{
            backgroundImage: `url("/images/overlay.png")`,
          }}
        ></div>
        {children}
      </body>
    </html>
  );
}
