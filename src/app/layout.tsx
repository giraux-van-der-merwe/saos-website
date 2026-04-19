import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Southern Africa Overlanding Storage",
    template: "%s | SAOS",
  },
  description:
    "Secure, purpose-built vehicle and overlanding gear storage in Southern Africa. Between adventures, your equipment deserves a trusted home.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://saos-website-six.vercel.app"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
