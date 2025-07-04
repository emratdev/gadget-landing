import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import Provider from "./components/Hoc/Provider";
import Footer from "./components/Home/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})



export const metadata: Metadata = {
  title: "Gadget-Landing",
  description: "Gadget landing page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer/>
          <ScrollToTop/>
        </Provider> 
      </body>
    </html>
  );
}
