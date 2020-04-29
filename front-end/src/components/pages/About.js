import React, { Component } from "react";

class About extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<h1>About</h1>
				<p>
					This is the Web CRM system for GoCellar. Copyright reserved.
					Website programmer: Ning Han
				</p>
				<p>
					Return to <a href="/dashboard">Homepage</a>.
				</p>
				<p>"build": "react-scripts build",</p>
			</React.Fragment>
		);
	}
}

export default About;
