import type { Metadata } from "next";
import "./globals.css";
import "nes.css/css/nes.min.css";

export const metadata: Metadata = {
  title: "Sofian's World!",
  description: "Sofian's World is a website for Sofian's projects and blog posts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
