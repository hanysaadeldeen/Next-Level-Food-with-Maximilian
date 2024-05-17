import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "../components/main-header/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "meals",
  description: "this is for learn next with maximilain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
