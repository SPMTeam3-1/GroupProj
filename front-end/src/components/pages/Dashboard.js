import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter,
} from "react-router-dom";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

import "../../styles/Dashboard.scss";
import imgURL1 from "../../pic/fruit.jpg";
import imgURL2 from "../../pic/vege.jpg";
import imgURL3 from "../../pic/mix.jpg";
class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Carts: [],
			value: "",
			succAlert: false,
			failAlert: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		//alert('You have selected' + ' ' + this.state.value + ' ' + 'box');
		event.preventDefault();
		if (!this.state.value) {
			this.setState({ failAlert: true });
		} else {
			console.log("clicked");
			var CurrCart = this.state.Carts;
			CurrCart.push(this.state.value);
			this.setState({ value: "", Carts: CurrCart, succAlert: true });
			// this.props.updateCarts(CurrCart);
		}
	}

	setSuccAlert(boolean) {
		this.setState({ succAlert: boolean });
	}

	setFailAlert(boolean) {
		this.setState({ failAlert: boolean });
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		console.log("from dashboard: ", this.props);
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
				<SideBar
					SideBar={this.SideBar}
					Username={this.props.Username}
					Role={this.props.Role}
					Carts={this.state.Carts}
				/>
				<div className="content">
					<Alert
						variant="success"
						show={this.state.succAlert}
						onClose={() => this.setSuccAlert(false)}
						dismissible
					>
						<Alert.Heading>All Set!</Alert.Heading>
						<p>You have successfully add the box into the cart!</p>
					</Alert>
					<Alert
						variant="danger"
						show={this.state.failAlert}
						onClose={() => this.setFailAlert(false)}
						dismissible
					>
						<Alert.Heading>
							Oh snap! You have to choose a valid size!
						</Alert.Heading>
						<p>{this.state.errorMsg}</p>
					</Alert>
					<Card className="card-sm-1">
						<Card.Img
							border="dark"
							variant="top"
							width="100px"
							height="200px"
							src={imgURL1}
						/>
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Fruit Box</Card.Title>
							<Card.Text>
								Small-which is suitable for a couple
								Medium-which is suitable for a family of 4
								Large-which is suitable for a family of 6
							</Card.Text>

							<form onSubmit={this.handleSubmit}>
								<label>
									Choose your size of box
									<select
										value={this.state.value}
										onChange={this.handleChange}
									>
										<option value=""></option>
										<option value="S-Fruit-$20">
											Small-$20
										</option>
										<option value="M-Fruit-$40">
											Medium-$40
										</option>
										<option value="L-Fruit-$60">
											Large-$60
										</option>
									</select>
								</label>

								<Button type="submit" variant="primary">
									Select
								</Button>
							</form>
						</Card.Body>
					</Card>
					<Card className="card-sm-1">
						<Card.Img
							variant="top"
							width="100px"
							height="200px"
							src={imgURL2}
						/>
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Vegetable Box</Card.Title>
							<Card.Text>
								Small-which is suitable for a couple
								Medium-which is suitable for a family of 4
								Large-which is suitable for a family of 6
							</Card.Text>
							<form onSubmit={this.handleSubmit}>
								<label>
									Choose your size of box
									<select
										value={this.state.value}
										onChange={this.handleChange}
									>
										<option value=""></option>
										<option value="S-Veg-$15">
											Small-$15
										</option>
										<option value="M-Veg-$30">
											Medium-$30
										</option>
										<option value="L-Veg-$45">
											Large-$45
										</option>
									</select>
								</label>

								<Button type="submit" variant="primary">
									Select
								</Button>
							</form>
						</Card.Body>
					</Card>
					<Card className="card-sm-1">
						<Card.Img
							variant="top"
							width="100px"
							height="200px"
							src={imgURL3}
						/>
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Mixed Box</Card.Title>
							<Card.Text>
								Small-which is suitable for a couple
								Medium-which is suitable for a family of 4
								Large-which is suitable for a family of 6
							</Card.Text>
							<form onSubmit={this.handleSubmit}>
								<label>
									Choose your size of box
									<select
										value={this.state.value}
										onChange={this.handleChange}
									>
										<option value=""></option>
										<option value="S-Mixed-$18">
											Small-$18
										</option>
										<option value="M-Mixed-$36">
											Medium-$36
										</option>
										<option value="L-Mixed-$54">
											Large-$54
										</option>
									</select>
								</label>

								<Button type="submit" variant="primary">
									Select
								</Button>
							</form>
						</Card.Body>
					</Card>
					{/* </Card>{" "}
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
					</Card> */}
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

export default withRouter(Dashboard);
