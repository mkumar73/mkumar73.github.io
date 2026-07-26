import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manish Kumar | AI Researcher",
  description:
    "Research profile of Manish Kumar — tabular deep learning, numerical feature representations, splines, and agentic AI.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
