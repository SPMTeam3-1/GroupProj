import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter
} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import MenuItem from "react-bootstrap/DropdownMenu";

import "../../styles/Signup.css";
import Dropdown from "react-bootstrap/Dropdown";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a
		href=""
		ref={ref}
		onClick={e => {
			e.preventDefault();
			onClick(e);
		}}
	>
		{children}
		&#x25bc;
	</a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
	({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
		const [value, setValue] = useState("");

		return (
			<div
				ref={ref}
				style={style}
				className={className}
				aria-labelledby={labeledBy}
			>
				<FormControl
					autoFocus
					className="mx-3 my-2 w-auto"
					placeholder="Type to filter..."
					onChange={e => setValue(e.target.value)}
					value={value}
				/>
				<ul className="list-unstyled">
					{React.Children.toArray(children).filter(
						child =>
							!value ||
							child.props.children.toLowerCase().startsWith(value)
					)}
				</ul>
			</div>
		);
	}
);

class Signup extends Component {
	state = {};
	render() {
		return (
			<div>
				<h1>This is the sign up page</h1>
				<Form className="Signup-item">
					<Form.Group as={Form.Row}>
						<Form.Label column sm="3">
							Username
						</Form.Label>
						<Col sm="8">
							<Form.Control
								type="username"
								placeholder="Enter username or email address"
								onChange={this.handleUsernameChange}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Form.Row}>
						<Form.Label column sm="3">
							Password
						</Form.Label>
						<Col sm="8">
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
					<Form.Group as={Form.Row}>
						<Form.Label column sm="3">
							Winery Name
						</Form.Label>
						<Col sm="8">
							<Form.Control
								type="username"
								placeholder="Enter and select the winery name that you want to register"
								onChange={this.handleUsernameChange}
							/>
						</Col>
					</Form.Group>{" "}
					<DropdownButton
						variant="default"
						size="lg"
						style={{
							maxHeight: "28px",
							width: "30%",
							marginLeft: "auto",
							marginRight: "auto"
						}}
						title={
							"Select the winary name that you need to register with"
						}
						key={1}
						id="dropdown-size-large"
					>
						<Dropdown.Item eventKey="1">Action</Dropdown.Item>
						<Dropdown.Item eventKey="2">
							Another action
						</Dropdown.Item>
						<Dropdown.Item eventKey="3" active>
							Active Item
						</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item eventKey="4">
							Separated link
						</Dropdown.Item>
					</DropdownButton>{" "}
					<Button
						variant="primary"
						type="submit"
						size="lg"
						className="submitBtn"
						onClick={this.handleLoginClick}
					>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default Signup;
