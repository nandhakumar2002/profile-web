import React from 'react';
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./App.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/profile-web/" element={<Homepage />} />
				<Route path="/profile-web/about" element={<About />} />
				<Route path="/profile-web/projects" element={<Projects />} />
				<Route path="/profile-web/articles" element={<Articles />} />
				<Route path="/profile-web/article/:slug" element={<ReadArticle />} />
				<Route path="/profile-web/contact" element={<Contact />} />
				<Route path="/profile-web*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
