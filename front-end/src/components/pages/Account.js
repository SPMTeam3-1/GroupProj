import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter,
} from "react-router-dom";

import SideBar from "./SideBar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../../styles/Account.scss";

class Account extends Component {
	state = {
		Name: "Username",
		Authority: "Admin",
		Address: "1234 Swanston St",
		City: "Melbourne",
		State: "Victoria",
		Postcode: "3000",
		Mobile: "XXXX",
		Telephone: "XXXX",
		Email: "XXX@XXX",
		Fax: "XXX",
		inEditMode: false,
	};

	handleProfileButton = () => {
		// event.preventDefault();
		this.setState({ inEditMode: true });
	};

	handleDetailSubmit = (event) => {
		event.preventDefault();
		this.setState({ inEditMode: false });
	};

	handleNameChange = (e) => {
		this.setState({ Name: e.target.value });
		console.log("changed to: ", this.state.Name);
	};

	// handleSelectState = e => {
	// 	this.setState({ State: e.target.value });
	// 	console.log("change to: ", this.state.State);
	// };

	render() {
		return (
			<div>
				<SideBar SideBar={this.SideBar} />
				<div className="content">
					<div className="account_profile">
						<Image
							// variant="top"
							className="profileImg"
							style={{
								width: "200px",
								height: "200px",
								display: "inline-block",
								marginLeft: "3em",
								marginRight: "3em",
							}}
							src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
							roundedCircle
						/>
						<div className="profileUser">
							<h1 className="profileUserName">User Name</h1>
							<Button
								variant="outline-info"
								className="profileChange"
								size="lg"
								onClick={this.handleProfileButton}
							>
								Change profile information
							</Button>
						</div>
					</div>
					<h1 className="title">My Detail</h1>
					<div className="account_detail">
						<Form>
							<Form.Row>
								<Form.Group
									className="formName"
									controlId="formGridName"
								>
									<Form.Label as={Form.col} size="lg">
										Name
									</Form.Label>
									<Form.Control
										type="Name"
										as={Form.col}
										placeholder={this.state.Name}
										readOnly={!this.state.inEditMode}
										size="lg"
										onChange={this.handleNameChange}
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group
									as={Form.col}
									controlId="formGridAddress1"
								>
									<Form.Label size="lg">Address</Form.Label>
									<Form.Control
										placeholder={this.state.Address}
										readOnly={!this.state.inEditMode}
										size="lg"
									/>
								</Form.Group>

								<Form.Group
									as={Form.col}
									controlId="formGridCity"
								>
									<Form.Label size="lg">City</Form.Label>
									<Form.Control
										placeholder={this.state.City}
										readOnly={!this.state.inEditMode}
										size="lg"
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group
									as={Form.col}
									controlId="formGridState"
								>
									<Form.Label size="lg">State</Form.Label>
									<Form.Control
										as="select"
										value="Choose..."
										placeholder={this.state.State}
										readOnly={!this.state.inEditMode}
										size="lg"
										// onSelect={this.handleSelectState}
									>
										<option>Victoria</option>
										<option>New South Wales</option>
										<option>Tasmania</option>
										<option>Queensland</option>
										<option>Western Australia</option>
										<option>South Australia</option>
									</Form.Control>
								</Form.Group>

								<Form.Group
									as={Form.col}
									controlId="formGridPostcode"
								>
									<Form.Label size="lg">Postcode</Form.Label>
									<Form.Control
										placeholder={this.state.Postcode}
										readOnly={!this.state.inEditMode}
										size="lg"
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group
									as={Form.col}
									controlId="formGridMobile"
									className="contact_item"
								>
									<Form.Label size="lg">
										Mobile Phone
									</Form.Label>
									<Form.Control
										placeholder={this.state.Mobile}
										readOnly={!this.state.inEditMode}
										size="lg"
									/>
								</Form.Group>

								<Form.Group
									as={Form.col}
									controlId="formGridTelephone"
									className="contact_item"
								>
									<Form.Label size="lg">Telephone</Form.Label>
									<Form.Control
										placeholder={this.state.Telephone}
										readOnly={!this.state.inEditMode}
										size="lg"
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group
									as={Form.col}
									controlId="formGridEmail"
									className="contact_item"
								>
									<Form.Label size="lg">Email</Form.Label>
									<Form.Control
										placeholder={this.state.Email}
										readOnly={!this.state.inEditMode}
										size="lg"
									/>
								</Form.Group>

								<Form.Group
									as={Form.col}
									controlId="formGridFax"
									className="contact_item"
								>
									<Form.Label size="lg">Fax</Form.Label>
									<Form.Control
										placeholder={this.state.Fax}
										readOnly={!this.state.inEditMode}
										size="lg"
									/>
								</Form.Group>
							</Form.Row>
							{this.state.inEditMode ? (
								<Button
									variant="primary"
									// type="submit"
									className="account_detail_btn"
									onClick={this.handleDetailSubmit}
									size="lg"
								>
									Submit
								</Button>
							) : null}
						</Form>
					</div>
					{/* <h1 className="title">Contact</h1>
					<div className="account_contact">
						<Form></Form>
					</div> */}
				</div>
			</div>
		);
	}
}

export default withRouter(Account);
