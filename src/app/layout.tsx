import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofian's Portfolio",
  description: "Sofian's Portfolio is a place where you can see my projects. Btw, i'm searching for an Alternance !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
			<head>
				<link rel="stylesheet" href="https://kit.fontawesome.com/a31e608af5.css" crossOrigin="anonymous" />
			</head>
      <body>
        {children}
      </body>
    </html>
  );
}
