import "./App.css";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import MainSection from "./components/MainSection/MainSection";
import Globe3D from "./components/3D/Globe3D";
function App() {
	return (
		<BrowserRouter>
		<div className="main"></div>
			<div className="App">
				
				<Navbar />
				<Globe3D />
				<AboutMe />
				<Skills />
				<Projects />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
