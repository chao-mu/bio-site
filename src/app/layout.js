import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Autumn Green - Full-stack Engineer",
  description:
    "Autumn Green is a full-stack engineer based in Boston,  Massachusetts specializing in information security, devops, and both back and front end development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
