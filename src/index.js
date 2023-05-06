import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'G-LCYDLBGL8E'
}
TagManager.initialize(tagManagerArgs)

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
