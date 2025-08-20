import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple White Page",
  description: "A simple white page with a black button",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen">
        {children}
      </body>
    </html>
  );
}