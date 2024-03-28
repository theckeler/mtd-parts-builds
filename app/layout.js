import "@/styles/globals.css";

import Footer from "@/templates/Footer";
import Header from "@/templates/Header";

export const metadata = {
  title: "MTD Parts Builds",
  description: "Nothing to see here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://staging.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/en_US/v1695748141977/css/global.css"
        />
        <link
          rel="stylesheet"
          href="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/en_US/v1692119154763/css/product/detail.css"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
