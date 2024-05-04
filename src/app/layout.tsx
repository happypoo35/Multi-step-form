import { Ubuntu } from "next/font/google";
import type { Metadata, Viewport } from "next";

import { Header } from "./header";
import { Title } from "./title";
import { Footer } from "./footer";

import styles from "./layout.module.scss";
import "@/styles/globals.scss";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F0F6FF",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Multi-step form",
    default: "Multi-step form",
    absolute: "Multi-step form",
  },
  description: "Design preview for the Multi-step form coding challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className={styles.wrapper}>
          <Header />
          <main className={styles.main}>
            <Title />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
