import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const url = "https://portfolio-theta-gold-88.vercel.app";
const title = "Saif Ben Abdallah — Technology & Business Development";
const description =
  "Saif Ben Abdallah — Software Engineer and digital solutions builder focused on software engineering, digital products and B2B partnerships.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  authors: [{ name: "Saif Ben Abdallah" }],
  keywords: ["Software Engineer", "Digital Solutions", "B2B Partnerships", "Business Development", "Next.js"],
  openGraph: { title, description, url: `${url}/en`, siteName: "Saif Ben Abdallah", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};
export const viewport: Viewport = { themeColor: "#07090a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
