import React from "react";
function Header() {
	return (
		<header>
			<nav role="navigation">
				<div className="header container">
					<div className="row">
						<div className="col-12">
							<div className="navbar-header brand">
								<a href="#top" title="MTD Parts Home">
									<img
										className="icon logo "
										src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dwfba79fa6/images/svg-icons/logo.svg"
										alt="MTD Parts"
									/>
								</a>
							</div>
							<div className="navbar-header">
								<div className="pull-left">
									<div className="hidden-md-down">
										<div className="user hidden-md-down">
											<a href="#top">
												<span className="user-message">Login</span>
												<img
													className="icon arrow-right-sm "
													src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dw9cdbedbe/images/svg-icons/arrow-right-sm.svg"
													alt=""
												/>
											</a>
										</div>
									</div>
									<button
										className="navbar-toggler d-lg-none"
										type="button"
										aria-controls="sg-navbar-collapse"
										aria-expanded="false"
										aria-label="Toggle navigation">
										<img
											className="icon mobile-menu "
											src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dwb250381d/images/svg-icons/mobile-menu.svg"
											alt=""
										/>
									</button>
								</div>
								<div className="pull-right">
									<div className="search hidden-md-down">
										<div className="site-search">
											<form
												role="search"
												action="/en_US/search"
												method="get"
												name="simpleSearch">
												<span className="close-icon d-none">
													<img
														className="icon close-dark "
														src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dw9376228a/images/svg-icons/close-dark.svg"
														alt="Close"
													/>
												</span>
												<span className="search-icon">
													<img
														className="icon search "
														src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dwd3cc0436/images/svg-icons/search.svg"
														alt="Search"
													/>
												</span>
												<input
													className="form-control search-field"
													type="search"
													name="q"
													defaultValue=""
													placeholder="Keyword, Model or Part #"
													autoComplete="off"
													aria-label="Keyword, Model or Part #"
												/>
												<div
													className="suggestions-wrapper"
													data-url="/on/demandware.store/Sites-mtdparts-Site/en_US/SearchServices-GetSuggestions?q="
												/>
												<input type="hidden" defaultValue="en_US" name="lang" />
											</form>
										</div>
										<a href="#top" className="search-button">
											<img
												className="icon search "
												src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dwd3cc0436/images/svg-icons/search.svg"
												alt="Search"
											/>
										</a>
									</div>
									<div
										className="minicart"
										data-action-url="/on/demandware.store/Sites-mtdparts-Site/en_US/Cart-MiniCartShow">
										<div className="minicart-total">
											<a
												className="minicart-link"
												href="https://www.mtdparts.com/en_US/cart"
												title="View Cart">
												<img
													className="icon cart "
													src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dw181db195/images/svg-icons/cart.svg"
													alt=""
												/>
												<span className="minicart-quantity">0</span>
											</a>
										</div>
										<div className="popover popover-bottom" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="main-menu navbar-toggleable-md menu-toggleable-left multilevel-dropdown"
					id="sg-navbar-collapse">
					<div className="container-fluid">
						<div className="row">
							<nav className="navbar navbar-expand-lg bg-inverse col-12">
								<div className="close-menu clearfix d-lg-none">
									<div className="back pull-left">
										<a href="#top" role="button">
											<span>
												<img
													className="icon arrow-left-sm "
													src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dw17955e8e/images/svg-icons/arrow-left-sm.svg"
													alt=""
												/>
											</span>
											Back
										</a>
									</div>
									<div className="close-button pull-right">
										<a href="#top" role="button">
											Close
											<span aria-hidden="true">
												<img
													className="icon close-dark "
													src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dw9376228a/images/svg-icons/close-dark.svg"
													alt=""
												/>
											</span>
										</a>
									</div>
								</div>
								<div
									className="menu-group"
									aria-label="Main menu"
									role="navigation">
									<ul className="nav navbar-nav" role="menu">
										<li className="nav-item" role="menuitem">
											<a
												href="https://www.mtdparts.com/en_US/ari-partstream.html"
												id="Parts_Diagram"
												role="button"
												className="nav-link">
												Shop by Parts Diagram
											</a>
										</li>
										<li className="nav-item dropdown" role="menuitem">
											<a
												href="/en_US/shop-by-part-type"
												id="part-types"
												className="nav-link dropdown-toggle"
												role="button"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false">
												Shop By Part Type
											</a>
										</li>
										<li className="nav-item dropdown" role="menuitem">
											<a
												href="/en_US/shop-by-machine-type"
												id="machine-types"
												className="nav-link dropdown-toggle"
												role="button"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false">
												Shop By Machine Type
											</a>
										</li>
										<li className="nav-item dropdown" role="menuitem">
											<a
												href="/en_US/engine-parts-2"
												id="engine-parts"
												className="nav-link dropdown-toggle"
												role="button"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false">
												Engine Parts
											</a>
										</li>
										<li className="nav-item dropdown" role="menuitem">
											<a
												href="/en_US/accessories-and-attachments"
												id="accessories-attachments"
												className="nav-link dropdown-toggle"
												role="button"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false">
												Accessories and Attachments
											</a>
										</li>
										<li className="nav-item dropdown" role="menuitem">
											<a
												href="/en_US/equipment"
												id="equipment"
												className="nav-link dropdown-toggle"
												role="button"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false">
												Equipment
											</a>
										</li>
										<li className="nav-item d-lg-none" role="menuitem">
											<a href="#top" className="nav-link">
												<span className="user-message">Login</span>
											</a>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
				<div className="search-mobile d-lg-none">
					<div className="site-search">
						<form
							role="search"
							action="/en_US/search"
							method="get"
							name="simpleSearch">
							<span className="close-icon d-none">
								<img
									className="icon close-dark "
									src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dw9376228a/images/svg-icons/close-dark.svg"
									alt="Close"
								/>
							</span>
							<span className="search-icon">
								<img
									className="icon search "
									src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dwd3cc0436/images/svg-icons/search.svg"
									alt="Search"
								/>
							</span>
							<input
								className="form-control search-field"
								type="search"
								name="q"
								defaultValue=""
								placeholder="Keyword, Model or Part #"
								autoComplete="off"
								aria-label="Keyword, Model or Part #"
							/>
							<div
								className="suggestions-wrapper"
								data-url="/on/demandware.store/Sites-mtdparts-Site/en_US/SearchServices-GetSuggestions?q="
							/>
							<input type="hidden" defaultValue="en_US" name="lang" />
						</form>
					</div>
					<a href="#top" className="search-button">
						<img
							className="icon search "
							src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dwd3cc0436/images/svg-icons/search.svg"
							alt="Search"
						/>
					</a>
				</div>
			</nav>
		</header>
	);
}

export default Header;
