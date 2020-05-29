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
		username: this.props.Username,
        Role: this.props.Role,
        Name: "",
		Address1: "",
		Address2: "",
		City: "",
		State: "",
		Postcode: "",
		Mobile: "",
		Home: "",
		Email: "",
		Working: "",
		inEditMode: false,
	};

	componentDidMount() {
        //  hard coded id due to bad implementation.
        fetch(`http://localhost:3000/account/${this.state.Role === 'admin' ? 2 : 1}`, {
            method: "GET"
        })
        .then((response) => response.json())
        .then((data) => {
            if ((data.status === "200" )) {
                console.log(data.user)
                const user = data.user
                this.setState({
                    ...this.state,
                    Address1: user.address_1,
                    Address2: user.address_2,
                    City: user.city,
                    Email: user.email,
                    Home: user.home,
                    Mobile: user.mobile,
                    Name: user.name,
                    Postcode: user.postcode,
                    State: user.state,
                    Working: user.work
                })
            }
        })

        // address_1: "570 Lygon St"
        // address_2: null
        // city: "Melbourne"
        // email: "fdmd2011@gmail.com"
        // home: "0882629917"
        // id: 1
        // mobile: "0481233205"
        // name: "Midas"
        // password: "123456"
        // postcode: 3053
        // role: "customer"
        // state: "Victoria"
        // work: "0123456789"

		// fetch user data here
		// try {
		// 	/* fetch wine list with parameter wineID and save it to state as wine_list*/
		// 	var url = `https://dy4v35a040.execute-api.ap-southeast-2.amazonaws.com/latest/winelist/${1}`;
		// 	var response = await fetch(url);
		// 	var data = await response.json();
		// 	console.log("product list", data);
		// 	// await this.setState({ event_data: data.date });
		// } catch (err) {
		// 	console.log(err);
		// }
	}

	handleProfileButton = () => {
		// event.preventDefault();
		this.setState({ inEditMode: true }, _ => console.log(this.state));
	};

	handleDetailSubmit = (event) => {
		event.preventDefault();
        console.log("state: ", this.state);
        fetch(`http://localhost:3000/account/${this.state.Role === 'admin' ? 2 : 1}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.Name,
                address_1: this.state.Address1,
                address_2: this.state.Address2,
                city: this.state.City,
                state: this.state.State,
                postcode: this.state.Postcode,
                mobile: this.state.Mobile,
                home: this.state.Home,
                work: this.state.Working,
                email: this.state.Email
            })
        })
        .then((response) => response.json())
        .then((data) => {
            if ((data.status === "200" )) {
                this.setState({ inEditMode: false });
            }
        })
		
		// using POST API to transfer the data to DB
	};

	handleNameChange = (e) => {
		this.setState({ Name: e.target.value });
		console.log("changed to: ", this.state.Name);
	};

	handleUserInfoChange = (event) => {
		event.preventDefault();
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({ [name]: value });
	};

	// handleSelectState = e => {
	// 	this.setState({ State: e.target.value });
	// 	console.log("change to: ", this.state.State);
	// };

	render() {
		return (
			<div>
				<SideBar
					SideBar={this.SideBar}
					Name={this.state.Name}
					Role={this.props.Role}
				/>
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
							<h1 className="profileUserName">
								{this.props.Username
									? this.props.Username
									: this.props.location.Props.Username}
							</h1>
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
										name="Name"
										as={Form.col}
										placeholder={this.state.Name}
										readOnly={!this.state.inEditMode}
										size="lg"
										onChange={this.handleUserInfoChange}
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group
									as={Form.col}
									controlId="formGridAddress1"
								>
									<Form.Label size="lg">Address 1</Form.Label>
									<Form.Control
										name="Address1"
										placeholder={this.state.Address1}
										readOnly={!this.state.inEditMode}
										size="lg"
										onChange={this.handleUserInfoChange}
									/>
								</Form.Group>
								<Form.Group
									as={Form.col}
									controlId="formGridAddress1"
								>
									<Form.Label size="lg">Address 2</Form.Label>
									<Form.Control
										name="Address2"
										placeholder={this.state.Address2}
										readOnly={!this.state.inEditMode}
										size="lg"
										onChange={this.handleUserInfoChange}
									/>
								</Form.Group>

								<Form.Group
									as={Form.col}
									controlId="formGridCity"
								>
									<Form.Label size="lg">City</Form.Label>
									<Form.Control
										name="City"
										placeholder={this.state.City}
										readOnly={!this.state.inEditMode}
										size="lg"
										onChange={this.handleUserInfoChange}
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
										name="State"
										onChange={this.handleUserInfoChange}
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
										name="Postcode"
										onChange={this.handleUserInfoChange}
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
										name="Mobile"
										placeholder={this.state.Mobile}
										readOnly={!this.state.inEditMode}
										size="lg"
										onChange={this.handleUserInfoChange}
									/>
								</Form.Group>

								<Form.Group
									as={Form.col}
									controlId="formGridHome"
									className="contact_item"
								>
									<Form.Label size="lg">Home</Form.Label>
									<Form.Control
										name="Home"
										placeholder={this.state.Home}
										readOnly={!this.state.inEditMode}
										size="lg"
										onChange={this.handleUserInfoChange}
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
										name="Email"
										placeholder={
											this.props.Username
												? this.props.Username
												: this.props.location.Props
														.Username
										}
										readOnly={!this.state.inEditMode}
										size="lg"
										onChange={this.handleUserInfoChange}
									/>
								</Form.Group>

								<Form.Group
									as={Form.col}
									controlId="formGridWorking"
									className="contact_item"
								>
									<Form.Label size="lg">Working</Form.Label>
									<Form.Control
										name="Working"
										placeholder={this.state.Working}
										readOnly={!this.state.inEditMode}
										size="lg"
										onChange={this.handleUserInfoChange}
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
