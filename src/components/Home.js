import React from "react";
import { Link } from "react-router-dom";
import "../scss/home.scss";

const Home = () => {
	return (
		<div
			className="wrapper home"
			style={{
				minHeight: "50vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				//	alignItems: "center",
			}}>
			<h1 style={{ textTransform: "uppercase" }}>MTD Parts Page Builds:</h1>
			<ul className="home-list  w-100">
				<li>
					<Link to="/customer-service">Customer Service</Link>
				</li>

				<li>
					<a
						href="https://mtdparts.consumedesign.com/"
						target="_blank"
						rel="noreferrer">
						Full Site Redo
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Home;
