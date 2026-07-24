import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Connor Griffin | Portfolio",
  description: "Connor Griffin's software projects and hackathon work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
