import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReactGA from 'react-ga';

ReactGA.initialize('G-LCYDLBGL8E');
ReactDOM.render(
	<React.StrictMode>
	<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LCYDLBGL8E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LCYDLBGL8E');
</script>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
