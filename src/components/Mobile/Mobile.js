import React from "react";

import Project from "../Project/Project";
import appImage from "../../images/AppImage.png";
import "./Mobile.css";

const Mobile = () => {
	//List of projects
	const mobile = [
		{
			title: "Vein Finding App For Iphone/Ipad",
			demoLink: "https://apps.apple.com/il/app/x-vein/id6451044832?l=he",
			imageSrc: appImage,
		},
		
	];

	return (
		<div id="background">
			<h1 className="work-heading">Select Works As A Mobile Developer</h1>
			<div id="work" className="projects-container" projects={mobile}>
				{mobile.map((project, index) => {
					return <Project project={project} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Mobile;
