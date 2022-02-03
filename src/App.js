import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
		<div>
			<Navigation></Navigation>
			<Header></Header>
			<div className="projects">
				<Project></Project>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
