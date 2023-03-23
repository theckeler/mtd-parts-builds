import React from "react";
function Header() {
	return (
		<nav style={{ background: "#d0cfcf" }}>
			<div
				className="wrapper ml-auto mr-auto"
				style={{ padding: "20px", maxWidth: "1400px" }}>
				<a href="/" title="Cub Cadet Home">
					<img
						className="icon logo"
						src="https://www.mtdparts.com/on/demandware.static/Sites-mtdparts-Site/-/default/dwaf587210/images/svg-icons/logo.svg"
						alt=""
					/>
				</a>
			</div>
		</nav>
	);
}

export default Header;
