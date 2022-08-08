import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer" id="contact">
			<h1>Contact</h1>
			<div className="social-links">
				<a
					href="https://www.linkedin.com/in/yonatan-martsiano-6376a314a/"
					target="_blank"
					rel="noreferrer noopener"
				>
					<i className="fab fa-linkedin"></i>
				</a>
				<a
					href="https://github.com/Yonatan19981"
					target="_blank"
					rel="noreferrer noopener"
				>
					<i className="fab fa-github"></i>
				</a>
				<a
					href="mailto:yonatan888@gmail.com"
					target="_blank"
					rel="noreferrer noopener"
				>
					<i className="far fa-envelope"></i>
				</a>
			</div>
			<p style={{ color: "white", margin: "1rem", paddingTop: "2rem" }}>
				Yonatan Martsiano &copy; 2022
			</p>
		</footer>
	);
};

export default Footer;
