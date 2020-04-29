import React, { Component } from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "../../styles/Dashboard.scss";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log(this.props);
		// return this.props.Dashboard.map(todo => (
		// <TodoItem
		// 	key={todo.id}
		// 	todo={todo}
		// 	markComplete={this.props.markComplete}
		// 	delTodo={this.props.delTodo}
		// />
		// ));
		return (
			<div className="Dashboard">
				<SideBar SideBar={this.SideBar} />
				<div className="content">
					<Card className="card-sm-1">
						<Card.Img
							border="dark"
							variant="top"
							src="holder.js/100px180"
						/>
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card className="card-sm-1">
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card className="card-sm-1">
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>{" "}
					<Card
						className="card-md"
						style={{ width: "80%", height: "30em" }}
					>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>{" "}
					<Card className="card-sm-2">
						<Card.Img
							border="dark"
							variant="top"
							src="holder.js/100px180"
						/>
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card className="card-sm-2">
						<Card.Img
							border="dark"
							variant="top"
							src="holder.js/100px180"
						/>
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card className="card-sm-2">
						<Card.Img
							border="dark"
							variant="top"
							src="holder.js/100px180"
						/>
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		);
	}
}

// PropTypes
// Dashboard.propTypes = {
// 	Dashboard: PropTypes.array.isRequired,
// 	markComplete: PropTypes.func.isRequired,
// 	delTodo: PropTypes.func.isRequired
// };

export default Dashboard;
