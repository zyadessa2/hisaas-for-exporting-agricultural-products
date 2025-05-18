import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import { NavbarDemo } from "@/components/header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400' , '500' , '700'],
  preload: true , // يبدا يجهز الخط قبل ميعرض البيدج 
});


export const metadata: Metadata = {
  title: "حصاد لتصدير الحاصلات الزراعيه",
  description: "فى حصاد لتصدير الحاصلات الزراعيه ، نصدر الجودة المصرية إلى العالم – خضروات طازجة، فواكه شهية، أعشاب عطرية، وبقوليات عالية الجودة، كلها تلبي معايير السلامة العالمية وتتجاوز توقعات عملائنا ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        <meta name="theme-color" content="#90D9A6" />
      </head>
      <body
        className={roboto.className} 
      >
        <NavbarDemo/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
