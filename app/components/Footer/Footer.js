export default function FooterLegal({ className, style }) {
	return (
		<div className={className} style={style}>
			<div className="px-2 mt-2" style={{ fontSize: 14 }}>
				MTD Products LLC P.O. Box 368022. Cleveland, OH 44136
				<div className="menu-footer">
					If you experience any problems accessing this website, please call us
					at{" "}
					<a
						aria-label="8 5 5. 9 7 1. 2 2 7 1.” title="
						call=""
						customer=""
						href="tel:18559712271"
						mtd=""
						service="">
						1-855-971-2271
					</a>{" "}
					for assistance.
				</div>
			</div>

			<div className="flex px-2 mt-2" style={{ gap: "1em" }}>
				<strong>Our Other Sites:</strong>
				<a href="https://www.cubcadet.com">Cub Cadet</a>
				<a href="https://www.troybilt.com">Troy-Bilt</a>
			</div>

			<p className="mt-2 px-2">
				<strong>
					WARRANTY ADDENDUM. IMPORTANT: This addendum defines the start of the
					warranty period.
				</strong>{" "}
				The applicable Warranty Period will begin on the original date of
				purchase of the Product or on the date of delivery of the Product,
				whichever is later.
			</p>

			<hr
				className="container w-100 mt-2"
				style={{ borderBottom: "1px solid #a8a8a8" }}
			/>

			<ul className="mt-1 flex px-2" style={{ gap: "1em" }}>
				<li>
					<a href="https://www.mtdparts.com/en_US/site-directory.html">
						Site Directory
					</a>
				</li>
				<li>
					<a
						href="https://www.mtdparts.com/en_US/shipping-returns.html"
						title="Go to Shipping & Returns policies">
						Shipping &amp; Returns
					</a>
				</li>
				<li>
					<a
						href="https://www.mtdparts.com/en_US/privacy-policy.html"
						title="Go to Privacy Policy">
						Privacy Policy
					</a>
				</li>
				<li className="ml-auto font-bold">Copyright © MTD 2023</li>
			</ul>
		</div>
	);
}
