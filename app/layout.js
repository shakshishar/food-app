import { Roboto } from "next/font/google";
import 'antd/dist/reset.css'; 
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto=Roboto({subsets:['Latin'],weight: ["400","500","700"]})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>

        <main className="max-w-5xl mx-auto border p-4">
        <Header/>
        {children}
        <Footer/>
        </main>
      </body>
    </html>
  );
}
