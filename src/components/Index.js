import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "../scss/main.scss";

import Home from "./Home";
import CustomerService from "./cs/Index";

const Index = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/customer-service" element={<CustomerService />} />
		</Routes>
	);
};

export default Index;
