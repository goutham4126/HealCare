import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HealCare",
  description: "The power of doctors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="w-full bg-white shadow-md fixed h-12">
            <Navbar/>
          </div>
          <div className="flex">
            <div className="bg-white w-56 mt-12 h-screen fixed shadow-md hidden lg:block">
              <Sidebar/>
            </div>
            <div className="lg:ml-56 w-full">
              <div className="mt-12">
                {children}
              </div>
            </div>
          </div>
      </body>
    </html>
  );
}
