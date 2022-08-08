import React from "react";
import Swallow from "../../images/Swallow_Tattoo.png";
import Grayblock from "../../images/Grayblock_power.png";
import Ape from "../../images/Ape_Project.png";
import Project from "../Project/Project";
import donkey from "../../images/Don-key_finance.png";
import Lava from "../../images/Lava_Financial.png";
import "./Projects.css";

const Projects = () => {
	//List of projects
	const projects = [
		{
			title: "Don-key.Finance",
			demoLink: "https://don-key.finance/",
			imageSrc: donkey,
		},
		{
			title: "The Ape Project",
			demoLink: "https://www.apeproject.io/",
			imageSrc: Ape,
		},
		{
			title: "Grayblock Power",
			demoLink: "https://www.grayblockpower.com/",
			imageSrc: Grayblock,
		},
		{
			title: "Lava Financial",
			demoLink: "https://www.lava.financial/",
			imageSrc: Lava,
		},
		{
			title: "Swallow Tattoo",
			demoLink: "https://www.swallow.digital/",
			imageSrc: Swallow,
		},
	];

	return (
		<div style={{ background: "rgb(40, 40, 40)" }}>
			<h1 className="work-heading">My Work</h1>
			<div id="work" className="projects-container" projects={projects}>
				{projects.map((project, index) => {
					return <Project project={project} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
