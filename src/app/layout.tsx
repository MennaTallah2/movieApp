import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import Head from "./head";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Head />

          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
