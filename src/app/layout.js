import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Autumn Green - Full-stack Engineer",
  description:
    "Autumn Green is a full-stack engineer based in Boston,  Massachusetts specializing in information security, devops, and both back and front end development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <header className={styles.header}>
          <Link href="/" className={styles["header__logo"]}>
            <Image src="/logo.svg" alt="Logo" width={64} height={64} />
          </Link>

          <nav className={styles.nav}>
            <ul className={styles["nav__links"]}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/bio">Bio</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
