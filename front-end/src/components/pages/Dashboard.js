import React, { Component } from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "../../styles/Dashboard.scss";
import imgURL1 from "../../pic/fruit.jpg";
import imgURL2 from "../../pic/vege.jpg";
import imgURL3 from "../../pic/mix.jpg";
class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ' S '};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	  }
	
	  
	handleSubmit(event) {
		//alert('You have selected' + ' ' + this.state.value + ' ' + 'box');
		event.preventDefault();
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
				/>
				<div className="content">
					<Card className="card-sm-1">
						<Card.Img
							border="dark"
							variant="top"
							width="100px" height="200px"
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
								<select value={this.state.value} onChange={this.handleChange}>
									<option value="S1">Small</option>
									<option value="M1">Medium</option>
									<option value="L1">Large</option>
								</select>
								</label>
								
								<Button type="submit" variant="primary" >Select</Button>
							</form>
							
							
						</Card.Body>
					</Card>
					<Card className="card-sm-1">
						<Card.Img variant="top" width="100px" height="200px" src={imgURL2} />
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
								<select value={this.state.value} onChange={this.handleChange}>
									<option value="S">Small</option>
									<option value="M">Medium</option>
									<option value="L">Large</option>
								</select>
								</label>
								
								<Button type="submit" variant="primary" >Select</Button>
							</form>
						</Card.Body>
					</Card>
					<Card className="card-sm-1">
						<Card.Img variant="top" width="100px" height="200px" src={imgURL3} />
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
								<select value={this.state.value} onChange={this.handleChange}>
									<option value="S2">Small</option>
									<option value="M2">Medium</option>
									<option value="L2">Large</option>
								</select>
								</label>
								
								<Button type="submit" variant="primary" >Select</Button>
							</form>
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
