import React from "react";
import "./SetAppointments.css";

const SetAppointments = () => {
//	<img src={imageSrc} alt="" loading="lazy" height="100%" width="100%" />

	return (
		<div className="SetAppointments-container">
			<div className="SetAppointments-description">
				<h2>Set Up A Free 30 Minute Blockchain Consultation With Me</h2>
	
					<a
						href={"https://calendly.com/yonatan888/30min"}
						className="button-link"
						target="_blank"
						rel="noreferrer noopener"
					>
						Meet Me
					</a>
	

			</div>
		</div>
	);
};

export default SetAppointments;
