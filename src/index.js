import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReactGA from 'react-ga';

ReactGA.initialize('G-LCYDLBGL8E');
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
