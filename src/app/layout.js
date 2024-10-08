import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:{
    default:"HealCare",
    template:"%s | HealCare"
  },
  description:"The power of doctors",
  icons:{
    icon:"https://i.postimg.cc/5t0SkVcf/logo-removebg-preview.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
            <div className="w-full bg-white shadow-md fixed h-12">
              <Navbar/>
            </div>
            <div className="flex">
              <div className="bg-white w-56 mt-12 h-screen fixed shadow-md hidden lg:block">
                <Sidebar/>
              </div>
              <div className="lg:ml-56 w-full">
                <div className="mt-12 mb-12 sm:mb-0">
                  {children}
                </div>
              </div>
            </div>
            <div className="sm:hidden fixed bottom-0 w-full">
              <Footer/>
            </div>
        </body>
      </Provider>
    </html>
  );
}
