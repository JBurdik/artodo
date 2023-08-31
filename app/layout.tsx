import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Shantell_Sans, Solitreo } from "next/font/google";
import { ModeToggle } from "@/components/theme-toggle-button";
import { Nav } from "@/components/shared/Nav";

const caveat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "900"],
});

export const metadata: Metadata = {
  title: "Artodo.shop",
  description:
    "Vítejte na našem webu, kde se specializujeme na gravírování do kovu. Nabízíme širokou škálu upomínkových předmětů, které můžeme personalizovat podle vašich přání. Naše nabídka zahrnuje klíčenky, náramky, řetízky a další šperky, které můžeme vybavit vašimi vlastními texty, designy nebo jmény. Každý výrobek je jedinečný a přináší osobní dotek do vašich dárků. Navštivte náš web a objevte naši špičkovou kvalitu, individuální design a luxusní gravírované doplňky pro různé příležitosti. Udělejte si radost nebo obdarujte své blízké originálním a nezapomenutelným upomínkovým předmětem s gravírováním do kovu.",
  creator: "Jirka Burdych",
  keywords: [
    "Gravírování mazlíčků do kovů",
    "Gravírování aut do kovů",
    "Gravírování květin do kovů",
    "Gravírování zvířat do kovů",
    "Gravírování přírodních motivů do kovů",
    "Gravírování osobních fotografií do kovů",
    "Gravírování oblíbených citátů do kovů",
    "Gravírování loga do kovů",
    "Gravírování do kovových šperků",
    "Gravírování do kovových destiček",
    "Gravírování do kovových předmětů",
    "Gravírování do kovových ozdob",
    "Gravírování do kovových zámků",
    "Gravírování do kovových ozdobných prvků",
    "Gravírování do kovových náramků",
    "Gravírování do kovových medailí",
    "Gravírování do kovových přívěsků",
    "Gravírování do kovových tabulek",
    "Gravírování do kovových povrchů",
    "Gravirování,",
    "Vzpomínkové předměty",
    "Originální dárky",
    "Psi",
    "Kočky",
    "Auta",
    "Artodo",
    "eshop",
    "náramky",
    "přívěsky",
    "řetízky",
    "gravírování do kovu",
    "upomínkové předměty",
    "klíčenky s gravírováním",
    "náramky s gravírováním",
    "řetízky s gravírováním",
    "personalizované dárky",
    "gravírované šperky",
    "designové gravírování",
    "unikátní gravírované produkty",
    "dárky pro speciální příležitosti",
    "vlastní text gravírování",
    "originální upomínkové předměty",
    "luxusní gravírované doplňky",
    "dárky pro milované osoby",
    "gravírování jmen",
    "individuální design gravírování",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={caveat.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          {children}
          {/* footer */}
          <div className="mt-10 shadow-md shadow-foreground p-10 text-center">
            <p className="text-xl">© Artodo.cz {new Date().getFullYear()}</p>
            <span className="text-sm text-gray-500">web by Jirka Burdych</span>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
