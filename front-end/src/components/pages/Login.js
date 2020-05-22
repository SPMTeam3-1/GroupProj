import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter,
} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";

import "../../styles/Login.scss";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			role: "",
			modalShow: false,
		};
	}

	handleUsernameChange = (event) => {
		this.setState({ username: event.target.value });
	};

	handlePasswordChange = (event) => {
		this.setState({ password: event.target.value });
	};

	handleUserRoleChange = (event) => {
		this.setState({ role: event.target.value });
	};

	handleLoginClick = (event) => {
		event.preventDefault();
		fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })

        })
        .then(response => response.json())
        .then(data => {
            if (data.status = '200') {
                this.props.history.push("/dashboard");
            }
            // this.state.username === "asdf" && this.state.password === "zxcv") {
			// this.props.updateUsername(this.state.username);
			// this.props.updatePassword(this.state.password);
			// this.props.updateRole(this.state.role);
			// ;
		    else {
                console.log('Username is asdf, password is zxcv')
			    this.setState({ modalShow: true });
            }
        })
	};

	handleClose = (event) => {
		this.setState({ modalShow: !this.state.modalShow });
	};

	render() {
		return (
			<div className="Login">
				<span
					style={{
						fontFamily: "Dancing Script",
						fontSize: "10em",
						fontStyle: "normal",
						fontVariant: "normal",
						fontWeight: "700",
						lineHeight: "27px",
						textShadow: "30px 30px #bfbfbf",
						cursor: "default",
					}}
					className="Login-title"
				>
					<link
						rel="stylesheet"
						type="text/css"
						href="//fonts.googleapis.com/css?family=Dancing+Script"
					/>
					JJFresh Online Ordering System
				</span>
				<div className="Login-interface">
					{/* <Card
						className="card-sm-1"
						style={{ width: "35rem", height: "10rem" }}
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
					</Card> */}
					<Form className="Login-item">
						<Form.Group as={Form.Row}>
							<Form.Label column>
								{/* sm="3" */}
								Email address
							</Form.Label>
							<Col>
								{/* sm="8" */}
								<Form.Control
									type="username"
									placeholder="Enter username"
									onChange={this.handleUsernameChange}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Form.Row}>
							<Form.Label column>Password</Form.Label>
							{/* sm="3" */}
							<Col>
								{/* sm="8" */}
								<Form.Control
									type="password"
									placeholder="Password"
									md="4"
									onChange={this.handlePasswordChange}
								/>
							</Col>
						</Form.Group>
						<Form.Text
							className="text-muted"
							style={{ margin: "1em auto 0 auto" }}
						>
							We'll never share your password with anyone else.
						</Form.Text>
						<Form.Group
							className="form-user-role"
							controlId="formBasicDropDown"
							as={Row}
						>
							<Form.Label size="sm" column>
								Sign in as{" "}
							</Form.Label>{" "}
							<Col>
								<Form.Control
									as="select"
									value={this.state.role}
									placeholder="User Role"
									size="sm"
									onChange={this.handleUserRoleChange}
								>
									<option>...</option>
									<option>Admin</option>
									<option>Supplier</option>
								</Form.Control>
							</Col>
						</Form.Group>{" "}
						<Button
							variant="primary"
							type="submit"
							size="lg"
							onClick={this.handleLoginClick}
						>
							Login
						</Button>
					</Form>
					<Modal
						show={this.state.modalShow}
						onHide={this.handleClose}
						centered
					>
						<Modal.Header closeButton>
							<Modal.Title>Log in failed</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							It seems like the username or password is incorrect.
						</Modal.Body>
						<Modal.Footer>
							<a href="/help">Need help logging in?</a>
							<Button variant="danger" onClick={this.handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
					<p className="signup">
						Don't have an account?{" "}
						<a href="/signup">Sign up here</a>.
					</p>
				</div>
			</div>
		);
	}
}

export default withRouter(Login);
