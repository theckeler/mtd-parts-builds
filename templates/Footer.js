"use client";
import ToggleTab from "@/components/ToggleTab";
import React from "react";
import FooterNoDropdown from "./NoDropdown";
import BlockSignUp from "@/components/SignUp";
import FooterLegal from "@/app/components/Footer/Footer";

export default function Footer() {
	const setup = {
		ul: {
			className: "flex flex-column flex-xl-row",
			style: {},
			li: { className: "col-12 col-xl-3 mt-xl-4", style: {} },
		},

		component: {
			className: "",
			style: {},
			li: {
				className: "",
				style: {},
				a: {
					className: "d-block p-2 px-xl-0 pt-xl-1 pb-xl-0",
					style: { color: "#000" },
				},
			},
		},
	};

	return (
		<footer>
			<style jsx>{`
				.container {
					max-width: 100%;
				}
				@media (min-width: 1374px) {
					.container {
						max-width: 1320px;
					}
				}
			`}</style>

			<div className="container">
				<ul className={setup.ul.className} style={setup.ul.style}>
					<li className={setup.ul.li.className} style={setup.ul.li.style}>
						<FooterNoDropdown title="Home" href="/" />

						<ToggleTab
							className="mt-xl-1"
							style={{}}
							id="account"
							title="Account"
							Component={
								<ul
									className={setup.component.className}
									style={setup.component.style}>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/account"
											title="Go to My Account">
											My Account
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/track-my-order"
											title="Go to Check Order">
											Check Order
										</a>
									</li>
								</ul>
							}
						/>

						<ToggleTab
							className="mt-xl-1"
							style={{}}
							id="about"
							title="About"
							Component={
								<ul
									className={setup.component.className}
									style={setup.component.style}>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/about-us.html"
											title="Go to About Us">
											About Us
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/privacy-policy.html"
											title="Go to Privacy">
											Privacy Policy
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/shipping-returns.html"
											title="Go to Shipping & Returns policies">
											Shipping &amp; Returns
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/promotion-policy.html"
											title="Go to Promotions Policy">
											Promotions Policy
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/sales-tax-policy.html">
											Sales Tax Policy
										</a>
									</li>
								</ul>
							}
						/>

						<ToggleTab
							className="mt-xl-1"
							style={{}}
							id="support"
							title="Support"
							Component={
								<ul
									className={setup.component.className}
									style={setup.component.style}>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/mtd-parts-customer-service.html/"
											target="_blank"
											title="Go to FAQs">
											FAQs
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/operatorsmanuals"
											title="Go to Operator's Manuals">
											Operator's Manuals
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/servicelocator?showMap=true&horizontalView=true&isForm=true"
											title="Go to Service Locator">
											Service Locator
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/registration.html"
											title="Go to Product Registration">
											Product Registration
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/ari-partstream.html"
											title="Go to Part Diagrams">
											Part Diagrams
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdproducts.com/en_US/product-safety/"
											title="Go to Cub Cadet Support site">
											Product Safety
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/product-recalls.html"
											title="Go to Part Diagrams">
											Product Recalls
										</a>
									</li>
									<li>Phone Support:</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											aria-label="8 5 5. 9 7 1. 2 2 7 1.” title="
											call=""
											customer=""
											href="tel:8559712271"
											mtd=""
											support="">
											1-855-971-2271
										</a>
									</li>
								</ul>
							}
						/>
					</li>
					<li className={setup.ul.li.className} style={setup.ul.li.style}>
						<ToggleTab
							className=""
							href="https://www.mtdparts.com/en_US/shop-by-machine-type/riding-lawn-mower-parts"
							style={{}}
							id="riding-mower"
							title="Riding Mower Parts"
							Component={
								<ul
									className={setup.component.className}
									style={setup.component.style}>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/accessories-and-attachments/riding-lawn-mower-attachments-and-accessories">
											Riding Mower Accessories
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/baggers-and-mulching-kits/lawn-mower-bagger-attachments">
											Riding Mower Attachments
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/accessories-and-attachments/baggers-and-mulching-kits">
											Riding Mower Baggers
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/riding-lawn-mower-parts/riding-mower-belts">
											Riding Mower Belts
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/riding-lawn-mower-parts/riding-mower-blades">
											Riding Mower Blades
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/riding-lawn-mower-parts/riding-mower-cables">
											Riding Mower Cables
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/shop-by-part-type/mower-decks">
											Riding Mower Decks
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/baggers-and-mulching-kits/mulching-kits">
											Riding Mower Mulching Kits
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/riding-lawn-mower-parts/riding-mower-pulleys">
											Riding Mower Pulleys
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/riding-lawn-mower-parts/riding-mower-blade-spindles">
											Riding Mower Spindles
										</a>
									</li>
								</ul>
							}
						/>

						<ToggleTab
							className="mt-xl-1"
							href="https://www.mtdparts.com/en_US/shop-by-machine-type/walk-behind-lawn-mower-parts"
							style={{}}
							id="walk-mower"
							title="Walk-Behind Mower Parts"
							Component={
								<ul
									className={setup.component.className}
									style={setup.component.style}>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/walk-behind-lawn-mower-parts/walk-behind-lawn-mower-belts">
											Walk-Behind Mower Belts
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/walk-behind-lawn-mower-parts/walk-behind-lawn-mower-blades">
											Walk-Behind Mower Blades
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/walk-behind-lawn-mower-parts/walk-behind-lawn-mower-cables">
											Walk-Behind Mower Cables
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/walk-behind-lawn-mower-parts/walk-behind-lawn-mower-pulleys">
											Walk-Behind Mower Pulleys
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/walk-behind-lawn-mower-parts/walk-behind-lawn-mower-blade-adapters">
											Walk-Behind Mower Blade Adapters
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/walk-behind-lawn-mower-parts/walk-behind-lawn-mower-tires-and-wheels">
											Walk-Behind Mower Wheels
										</a>
									</li>
								</ul>
							}
						/>
					</li>
					<li className={setup.ul.li.className} style={setup.ul.li.style}>
						<ToggleTab
							className=""
							href="https://www.mtdparts.com/en_US/shop-by-machine-type/snow-blower-parts"
							style={{}}
							id="snow-blower"
							title="Snow Blower Parts"
							Component={
								<ul
									className={setup.component.className}
									style={setup.component.style}>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/accessories-and-attachments/snow-blower-attachments-and-accessories">
											Snow Blower Accessories
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/snow-blower-parts/snow-blower-augers">
											Snow Blower Augers
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/snow-blower-parts/snow-blower-belts">
											Snow Blower Belts
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/snow-blower-parts/snow-blower-shave-plates">
											Snow Blower Shave Plates
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/snow-blower-parts/snow-blower-shear-pins">
											Snow Blower Shear Pins
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/snow-blower-parts/snow-blower-slide-shoes">
											Snow Blower Skid Shoes
										</a>
									</li>
								</ul>
							}
						/>

						<ToggleTab
							className="mt-xl-1"
							href="https://www.mtdparts.com/en_US/shop-by-machine-type/snow-blower-parts"
							style={{}}
							id="garden-tiller"
							title="Garden Tiller Parts"
							Component={
								<ul
									className={setup.component.className}
									style={setup.component.style}>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/garden-tiller-parts/tiller-and-cultivator-belts">
											Garden Tiller Belts
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/garden-tiller-parts/tiller-and-cultivator-cables">
											Garden Tiller Cables
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/garden-tiller-parts/tiller-and-cultivator-pulleys">
											Garden Tiller Pulleys
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/garden-tiller-parts/tiller-and-cultivator-tines">
											Garden Tiller Tines
										</a>
									</li>
								</ul>
							}
						/>

						<ToggleTab
							className="mt-xl-1"
							href="https://www.mtdparts.com/en_US/shop-by-machine-type/snow-blower-parts"
							style={{}}
							id="weed-wacker"
							title="Weed Wacker Parts"
							Component={
								<ul
									className={setup.component.className}
									style={setup.component.style}>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/handheld-string-trimmer-parts/string-trimmer-line">
											Weed Wacker Line
										</a>
									</li>
								</ul>
							}
						/>

						<ToggleTab
							className="mt-xl-1"
							href="https://www.mtdparts.com/en_US/shop-by-machine-type/chipper-shredder-vacuum-parts"
							style={{}}
							id="chipper-shredder"
							title="Chipper Shredder Vacuum Parts"
							Component={
								<ul
									className={setup.component.className}
									style={setup.component.style}>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/chipper-shredder-vacuum-parts/chipper-shredder-blades">
											Chipper Shredder Vacuum Blades &amp; Flails
										</a>
									</li>
								</ul>
							}
						/>
						<hr
							className="w-100 p-0 my-0 mt-2 d-none d-xl-block"
							style={{ borderBottom: "1px solid #a8a8a8" }}
						/>

						<FooterNoDropdown
							title="Robomow® Parts"
							href="https://www.mtdparts.com/en_US/robomow"
						/>

						<FooterNoDropdown
							title="Closeout Equipment"
							href="https://www.mtdparts.com/en_US/equipment/closeout-equipment"
						/>
					</li>
					<li className={setup.ul.li.className} style={setup.ul.li.style}>
						<ToggleTab
							className=""
							href="https://www.mtdparts.com/en_US/shop-by-part-type"
							style={{}}
							id="part-type"
							title="Shop By Part Type"
							Component={
								<ul
									className={setup.component.className}
									style={setup.component.style}>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/shop-by-part-type/belts">
											Belts
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/shop-by-part-type/blades">
											Blades
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/shop-by-part-type/spark-plugs">
											Spark Plugs
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/filters/air-filters">
											Air Filters
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/shop-by-part-type/carburetors">
											Carburetors
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/filters/oil-filters">
											Oil Filters
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/filters/fuel-filters">
											Fuel Filters
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/shop-by-part-type/batteries">
											Batteries
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/engine-starters/electric-starter-motors">
											Electric Starters
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/engine-starters/recoil-starters-and-pull-ropes">
											Recoil Starters
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/shop-by-part-type/mufflers">
											Mufflers
										</a>
									</li>
								</ul>
							}
						/>

						<ToggleTab
							className="mt-xl-1"
							href="https://www.mtdparts.com/en_US/knowledge-center.html"
							style={{}}
							id="knowledge-center"
							title="Knowledge Center"
							Component={
								<ul
									className={setup.component.className}
									style={setup.component.style}>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/lawn-mower-snow-blower-maintenance/maintenance.html">
											Maintenance
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/knowledge-center-articles/repairs.html">
											Repairs
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/safety.html">
											Safety
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/general-advice.html">
											General Advice &amp; Tips
										</a>
									</li>
									<li
										className={setup.component.li.className}
										style={setup.component.li.style}>
										<a
											className={setup.component.li.a.className}
											style={setup.component.li.a.style}
											href="https://www.mtdparts.com/en_US/mtd-diy-club-sign-up.html">
											DIY Club
										</a>
									</li>
								</ul>
							}
						/>
					</li>
				</ul>
			</div>

			<hr
				className="container w-100 d-none d-xl-block mt-6"
				style={{ borderBottom: "1px solid #a8a8a8" }}
			/>

			<ul
				className="container pt-2 pb-8 flex flex-column flex-xl-row"
				style={{ gap: "1em" }}>
				<li>
					<BlockSignUp className="px-2" />
				</li>
				<li>
					<hr
						className="h-100 pl-1 my-0 flex"
						style={{ borderLeft: "1px solid #a8a8a8" }}
					/>
				</li>
				<li>
					<FooterLegal className="" />
				</li>
			</ul>
		</footer>
	);
}
