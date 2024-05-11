import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/wrapper/Wrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
