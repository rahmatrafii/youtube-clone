import Layout from "@/components/Layout";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ContextProvider } from "@/contexts/AllContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rafi-youtube-clone.vercel.app/"),
  title: {
    default: "YouTube",
    template: "%s - YouTube",
  },
  description: "let's see various interesting videos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/_favicon.ico" type="image/x-icon" />
      <body className={inter.className}>
        <ContextProvider>
          <Layout>{children}</Layout>
        </ContextProvider>
      </body>
    </html>
  );
}
