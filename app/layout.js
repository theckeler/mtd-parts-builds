import Footer from "@/t/Footer";
import Header from "@/t/Header";
import "@/scss/main.scss";

export const metadata = {
	title: "MTD Parts Builds",
	description: "Nothing to see here",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<header>
					<Header />
					<link
						rel="stylesheet"
						href="https://staging.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/en_US/v1695748141977/css/global.css"
					/>

					<link
						rel="stylesheet"
						href="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/en_US/v1692119154763/css/product/detail.css"
					/>
				</header>
				<div style={{ minHeight: "200px" }}>{children}</div>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
