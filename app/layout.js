import { Roboto } from "next/font/google";
import "antd/dist/reset.css"; 
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";  

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster position="top-right" reverseOrder={false} /> 
        <main className="max-w-5xl mx-auto border p-4">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
