import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar"
// import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Versenext - Digital Agency",
  description: "Web development, SEO, digital marketing, video editing, social media marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-[#334155]`}>
        <Navbar />
        <main className="pt-24">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}