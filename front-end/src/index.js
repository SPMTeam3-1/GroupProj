import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("index"));

const Index = () => {
	return (
		<div>
			<p>Hello World!</p>
		</div>
	);
};
// ReactDOM.render(<Index />, document.getElementById("index"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
