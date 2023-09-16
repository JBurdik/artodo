import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const caveat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "900"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={caveat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
