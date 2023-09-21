import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "@/store/store-provider";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Shoppay",
  description: `Your one-stop destination for online shopping convenience. Shoppay is a fast and secure shipping options, 
  competitive prices, and a seamless shopping experience, we're here to make your online shopping journey as 
  effortless and enjoyable as possible. Join us today and discover the ease of finding everything you need in one place.`,
  icons: [
    {
      rel: "apple-touch-icon",
      url: "favicon/apple-touch-icon.png",
      sizes: "180x180",
    },
    { rel: "icon", url: "favicon/favicon-32x32.png", sizes: "32x32" },
    { rel: "icon", url: "favicon/favicon-16x16.png", sizes: "16x16" },
    {
      rel: "mask-icon",
      url: "favicon/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  ],
  manifest: "favicon/site.webmanifest",
  openGraph: {
    title: "Shoppay",
    description: `Your one-stop destination for online shopping convenience. Shoppay is a fast and secure shipping options, 
      competitive prices, and a seamless shopping experience, we're here to make your online shopping journey as 
      effortless and enjoyable as possible. Join us today and discover the ease of finding everything you need in one place.`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <html lang="en">
        <body className={`body ${inter.className}`}>
          <StoreProvider>{children}</StoreProvider>
        </body>
      </html>
    </>
  );
}
