import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manish Kumar | Research Scientist & AI Lead",
  description:
    "Research Scientist and AI Lead focused on tabular deep learning, LLM applications, multi-agent systems, and production ML platforms.",
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
