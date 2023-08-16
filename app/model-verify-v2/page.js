"use client";
import { useState, useEffect } from "react";
import ModelVerifyBlock from "./ModelVerify";
import Financing from "./Financing";
import Review from "./Review";

export default function ModelVerifyV2() {
	const [fit, setFit] = useState(false);
	const [inStockCheck, setInStockCheck] = useState(true);

	return (
		<div
			className="container product-detail product-wrapper"
			data-pid="19A30031OEM"
			itemScope=""
			itemType="http://schema.org/Product">
			<div
				className="position-fixed p-1 p-lg-4 text-center text-white"
				style={{
					right: "0",
					top: "0",
					zIndex: "100001",
					backgroundColor: "green",
					maxWidth: "240px",
					fontSize: "0.8em",
				}}>
				<p className="mb-0 ">
					<strong>Note:</strong> This is only to toggle the stock & results
					only.
				</p>
				<div>
					<button
						className="w-100 mb-1"
						onClick={() => {
							setInStockCheck(!inStockCheck);
						}}>
						Toggle In-Stock/Backordered
					</button>
				</div>
				<div className="d-flex flex-column">
					Fit:
					<button
						className="w-100 mb-1"
						onClick={() => {
							setFit(false);
						}}>
						Toggle Default
					</button>
					<button
						className="w-100 mb-1"
						onClick={() => {
							setFit("not");
						}}>
						Toggle Not Fits
					</button>
					<button
						onClick={() => {
							setFit("fits");
						}}>
						Toggle Fits
					</button>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div className="product-breadcrumb d-none d-md-block">
						<div className="row hidden-xs-down">
							<div className="col">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="/en_US/accessories-and-attachments">
											Accessories and Attachments
										</a>
									</li>
									<li className="breadcrumb-item">
										<a href="/en_US/accessories-and-attachments/baggers-and-mulching-kits">
											Baggers and Mulching Kits
										</a>
									</li>
									<li className="breadcrumb-item">
										<a href="/en_US/baggers-and-mulching-kits/lawn-mower-bagger-attachments">
											Lawn Mower Bagger Attachments
										</a>
									</li>
								</ol>
							</div>
						</div>
					</div>
					{/* Product Name */}
					<div className="row">
						<div className="d-md-none col-sm-12">
							<h1 className="product-name" itemProp="name">
								Riding Mower Bagger for 42 in. and 46 in. Decks
							</h1>
							<div className="product-number">
								Item:
								<span className="product-id" itemProp="productID">
									19A30031OEM
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				{/* Product Images Carousel */}
				<div className="primary-images col-12 col-sm-6">
					<div
						id="pdpCarousel-19A30031OEM"
						className="product-carousel slick-initialized slick-slider"
						role="listbox">
						<button
							className="slick-prev slick-arrow"
							aria-label="Previous"
							type="button"
							style={{}}>
							Previous
						</button>
						<div className="slick-list draggable">
							<div
								className="slick-track"
								style={{
									opacity: 1,
									width: 10710,
									transform: "translate3d(-630px, 0px, 0px)",
								}}>
								<div
									className="slide slick-slide slick-cloned"
									data-slick-index={-1}
									id=""
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide slick-current slick-active"
									data-slick-index={0}
									aria-hidden="false"
									tabIndex={0}
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=1000&sh=1000&sm=fit"
										style={{ position: "relative", overflow: "hidden" }}>
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
										<img
											role="presentation"
											alt=""
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=1000&sh=1000&sm=fit"
											className="zoomImg"
											style={{
												position: "absolute",
												top: "-28.1446px",
												left: "-237.27px",
												opacity: 0,
												width: 1000,
												height: 1000,
												border: "none",
												maxWidth: "none",
												maxHeight: "none",
											}}
										/>
									</span>
								</div>
								<div
									className="slide slick-slide"
									data-slick-index={1}
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd11d887c/products/Attachments_Accessories/19A30031OEM_2.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd11d887c/products/Attachments_Accessories/19A30031OEM_2.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide"
									data-slick-index={2}
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide"
									data-slick-index={3}
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide"
									data-slick-index={4}
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide"
									data-slick-index={5}
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide"
									data-slick-index={6}
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide"
									data-slick-index={7}
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide slick-cloned"
									data-slick-index={8}
									id=""
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide slick-cloned"
									data-slick-index={9}
									id=""
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd11d887c/products/Attachments_Accessories/19A30031OEM_2.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd11d887c/products/Attachments_Accessories/19A30031OEM_2.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide slick-cloned"
									data-slick-index={10}
									id=""
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide slick-cloned"
									data-slick-index={11}
									id=""
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide slick-cloned"
									data-slick-index={12}
									id=""
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide slick-cloned"
									data-slick-index={13}
									id=""
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide slick-cloned"
									data-slick-index={14}
									id=""
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
								<div
									className="slide slick-slide slick-cloned"
									data-slick-index={15}
									id=""
									aria-hidden="true"
									style={{ width: 630, height: 630 }}>
									<span
										className="slide-link zoom-hires"
										data-src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=1000&sh=1000&sm=fit">
										<img
											src="https://www.mtdparts.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=630&sh=630&sm=fit"
											className="slide-img"
											alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
										/>
									</span>
								</div>
							</div>
						</div>
						<button
							className="slick-next slick-arrow"
							aria-label="Next"
							type="button"
							style={{}}>
							Next
						</button>
					</div>
				</div>
				<div className="col-12 col-sm-6 col-xl-5">
					{/* Product Name */}
					<div className="h1 product-name hidden-sm-down">
						Riding Mower Bagger for 42 in. and 46 in. Decks
					</div>
					<div className="product-number-rating clearfix">
						{/* Product Number */}
						<div className="product-number hidden-sm-down pull-left">
							Item:
							<span className="product-id" itemProp="productID">
								19A30031OEM
							</span>
						</div>
					</div>
					<div className="product-description">
						<div className="long-description">
							<p>
								Bagging helps to foster lawn growth by preventing thatch from
								building up. Using a bagger helps control lawn disease
								naturally, encourages new grass growth, and acts as a natural
								crab grass and weed control. It can help increase curb appeal of
								your lawn. When you bag your grass clippings, you create a crisp
								appearance and a highly manicured professional finish, with
								defined striping, no grass clumps left behind, and grass less
								likely to spread to vegetable gardens or flower beds. Bagging
								your clippings is a huge time saver. It’s faster than raking and
								you won’t have to mow as often as mulching.
							</p>
							<p>
								Fits most Troy-Bilt and Cub Cadet, Yard Machines, Bolens, Huskee
								and Craftsman riding mowers with a 42- or 46-inch Cutting Deck
								(2010 - )
							</p>
							<ul>
								<li>Flex tubing to prevent&nbsp;clogging</li>
								<li>Integrated top-hinged hood, for easier removal of bags</li>
								<li>Sight window lets you know when the bags are full</li>
							</ul>
						</div>
					</div>
					<div className="">
						<hr />
					</div>
					<div className="row justify-content-center">
						{/*
---------------------------- 
ModelVerifyBlock
---------------------------- 
*/}

						<ModelVerifyBlock {...{ fit, inStockCheck }} />

						{/*
---------------------------- 
ModelVerifyBlock
---------------------------- 
*/}
						<div className="col-12">
							<hr />
						</div>
						{/* Attributes and Quantity */}
						<div className="col-12">
							<div className="row">
								<div className="simple-quantity col-5">
									<div className="quantity-form">
										<label className="d-none" htmlFor="quantity">
											Quantity
										</label>
										<label className="minus">
											<input type="button" name="minus" defaultValue="-" />
											<img
												className="icon icon-qty-minus "
												src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dw7e83125d/images/svg-icons/icon-qty-minus.svg"
												alt="decrease quantity"
											/>
										</label>
										<input
											id="quantity"
											type="text"
											name="quantity-input"
											className="quantity-input quantity-select form-control"
											defaultValue={1}
											min={1}
											max={99}
											data-url="/on/demandware.store/Sites-mtdparts-Site/en_US/Product-Variation?pid=19A30031OEM"
										/>
										<label className="plus">
											<input type="button" name="plus" defaultValue="+" />
											<img
												className="icon icon-qty-plus "
												src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dwc5c251a6/images/svg-icons/icon-qty-plus.svg"
												alt="increase quantity"
											/>
										</label>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 promotions"></div>
						<div className="col-12">
							<hr />
						</div>

						<div className="col-12 prices-add-to-cart-actions">
							<div className="prices">
								<div
									className="price"
									itemProp="offers"
									itemScope=""
									itemType="http://schema.org/Offer">
									<span>
										<meta itemProp="priceCurrency" content="USD" />
										<span className="sales">
											<span className="value" itemProp="price" content="449.99">
												$449.99
											</span>
										</span>
									</span>
								</div>
							</div>

							{/* Cart and [Optionally] Apple Pay */}
							<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
								<div className="col-11">
									<input
										type="hidden"
										className="add-to-cart-url"
										defaultValue="/on/demandware.store/Sites-mtdparts-Site/en_US/Cart-AddProduct"
									/>
									<button
										className="add-to-cart btn btn-primary"
										data-pid="19A30031OEM"
										data-gtmdata='{"id":"19A30031OEM","name":"Riding Mower Bagger for 42 in. and 46 in. Decks","productType":"ACCESSORY"}'>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
						{/* Cart and [Optionally] Apple Pay */}
						<div className="col-12 d-none d-sm-block">
							<hr />
						</div>
						{/* Part Replaces List */}
						<div className="col-12 part-replaces">
							<span className="part-replaces-text font-weight-bold">
								* This part replaces: 19A30003000, 19A30003799, 19A30003OEM
							</span>
						</div>
						<div className="col-12 parts-pledge">
							<div className="pdp-modal-content"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="description-and-detail ">
				<div className="tabs d-none d-lg-block">
					<ul className="nav nav-pills">
						<li className="nav-item">
							<a
								href="#specs-19A30031OEM"
								className="nav-link active"
								data-toggle="tab"
								role="tab">
								Specification
							</a>
						</li>
					</ul>
				</div>
				<div className="tab-content">
					<div
						id="specs-19A30031OEM"
						className="row product-attributes specs collapsible-md tab-pane active"
						role="tabpanel"
						aria-labelledby="specs-tab">
						<h2 className="col-12 d-lg-none">
							<a className="title" href="#">
								Specification
							</a>
						</h2>
						<div className="col-12 value content specs-content">
							<h4 className="attribute-name">Specifications</h4>
							<ul>
								<li className="attribute-values">
									<span>Series</span>
									Bagger
								</li>
							</ul>
							<h4 className="attribute-name">Blade Specifications</h4>
							<ul>
								<li className="attribute-values">
									<span>Deck Cutting Width</span>
									42 in, 46 in
								</li>
							</ul>
						</div>
					</div>
					{/* Cartful Solutions */}
				</div>
			</div>
			<div className="recommendations">
				{/* =============== This snippet of JavaScript handles fetching the dynamic recommendations from the remote recommendations server
and then makes a call to render the configured template with the returned recommended products: ================= */}
				{/* The DIV tag id below is unique on purpose in case there are multiple recommendation slots on the same .isml page: */}
				<div id="cq_recomm_slot-14821d09d0da883f0fc7cbbf32" />
				{/* ====================== snippet ends here ======================== */}
			</div>
		</div>
	);
}
