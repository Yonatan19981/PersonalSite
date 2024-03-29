import React from "react";
import reactLogo from "../../images/react.png";
import rustLogo from "../../images/Rust_logo.png";
import typescriptLogo from "../../images/typescript.png";
import javaLogo from "../../images/java.png";
import ethereumLogo from "../../images/ethereum_logo.png";
import javascriptLogo from "../../images/javascript.png";
import web3Logo from "../../images/Web3_logo.png";
import pythonLogo from "../../images/python.png";
import gitLogo from "../../images/git.png";
import "./Skills.css";

const Skills = () => {
	const images = [
		rustLogo,
		reactLogo,
		javascriptLogo,
		ethereumLogo,
		web3Logo,
		javaLogo,
		typescriptLogo,
		pythonLogo,
		gitLogo,
	];

	const logoImage = "logo-image";

	return (
		<div id="skills">
			<h1>Skills And Technologies</h1>
			<div className="heart"></div>
			<div className="skills-container">
				{images.map((img, index) => {
					return (
						<div className={logoImage + " image-" + (index + 1)} key={index}>
							<img src={img} alt="" className="skill-image" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
