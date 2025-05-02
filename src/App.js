import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import ProjectDetails1 from "./components/projects/ProjectDetails1";
import ProjectDetails2 from "./components/projects/ProjectDetails2";
import Resume from "./pages/resume";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/project-detail1" element={<ProjectDetails1 />} />
				<Route path="/project-detail2" element={<ProjectDetails2 />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
