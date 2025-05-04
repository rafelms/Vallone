import type { ReactNode } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "../components/theme-provider"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Bem-vindo a Vallone!",
  description: "Soluções profissionais para o seu negócio",
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
