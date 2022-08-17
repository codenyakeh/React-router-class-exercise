import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbars from "./components/Navbars";
import Project from "./components/Project";
import ContactDetails from "./components/ContactDetails";

function Routers() {
	return (
		<BrowserRouter>
			<Navbars />
      
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/project" element={<Project />} />
				<Route path="/about" element={<About />} />
                <Route path="/contactdetails:name" element={<ContactDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routers;
