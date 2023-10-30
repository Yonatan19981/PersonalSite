import React from "react";
import Project from "../Project/Project";
import Article1 from "../../images/ResearchImage.png";
import "./Research.css";

const Research = () => {
	//List of projects
	const research = [
		{
			title: "Research In Blockchain And Medicine",
			demoLink: "https://journals.sagepub.com/doi/10.1177/20552076231194851?icid=int.sj-full-text.similar-articles.7",
			imageSrc: Article1,
		},
	
	];

	return (
		<div id="background">
			<h1 className="work-heading">Select Works As A Researcher</h1>
			<div id="work" className="projects-container" projects={research}>
				{research.map((project, index) => {
					return <Project project={project} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Research;
