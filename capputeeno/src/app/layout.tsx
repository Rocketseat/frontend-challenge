import type { Metadata } from "next";
import "./globals.css";
import Header from "@/patterns/header";
import { Saira } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { DefaultProviders } from "@/patterns/default-providers";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "Capputeeno store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <StyledComponentsRegistry>
          <DefaultProviders>
            <Header />
            {children}
          </DefaultProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
