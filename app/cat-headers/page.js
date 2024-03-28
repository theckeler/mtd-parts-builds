"use client";

export default function CatHeaders() {
	const liCSS = "col-12 col-lg-4 px-0";
	const buttonCSS = "w-100 btn btn-primary";

	return (
		<div className="seo-text container">
			<link
				rel="stylesheet"
				href="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/en_US/v1695987496701/css/search.css"
			/>
			<p style={{ color: "#000" }}>
				MTD Parts offer a wide selection of belts designed for all your outdoor
				power equipment needs. Whether you're looking for drive belts for your{" "}
				<a href="$url('Search-Show','cgid','equipmen-category-snow-blo')$">
					<u>Snow Blower</u>
				</a>{" "}
				or deck belts for your{" "}
				<a href="$url('Search-Show','cgid','equipmen-category-riding-l')$">
					<u>Riding Lawn Mower</u>
				</a>
				, you'll find them here. Our{" "}
				<a href="$url('Page-Show','cid','part-finder')$">
					<u>Part Finder</u>
				</a>{" "}
				makes it easy to find the parts you need.
			</p>
			<ul
				className="list-unstyled flex flex-column flex-lg-row"
				style={{ gap: ".5em" }}>
				<li className={liCSS}>
					<a
						className={buttonCSS}
						href="$url('Search-Show','cgid','parts-machine--riding-l-belts')$">
						Shop Riding Mower Belts
					</a>
				</li>
				<li className={liCSS}>
					<a
						className={buttonCSS}
						href="$url('Search-Show','cgid','parts-machine--garden-t-belts')$">
						Shop Garden Tiller Belts
					</a>
				</li>
				<li className={liCSS}>
					<a
						className={buttonCSS}
						href="$url('Search-Show','cgid','parts-machine--walk-beh-belts')$">
						Shop Lawn Mower Belts
					</a>
				</li>
			</ul>
		</div>
	);
}
