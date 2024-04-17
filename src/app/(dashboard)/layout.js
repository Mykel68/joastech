import { Inter } from "next/font/google";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joastech Home",
  description: "Joastech Crypto ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Drawer /> */}
        {children}
      </body>
    </html>
  );
}
