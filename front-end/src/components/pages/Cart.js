import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter,
} from "react-router-dom";
import SideBar from "./SideBar";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import SearchField from "react-search-field";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import "../../styles/AllRoles.scss";

class Carts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchKeyWord: "",
			checkOutOnHide: true,
			succAlert: false,
			failAlert: false,
			DeliveryDate: "",
			TimeInterval: "Select a time slot",
			Carts: this.props.location.Props.Carts
				? this.props.location.Props.Carts
				: [],
			// : this.props.location.Props.Carts,
		};
	}

	onChange = (value) => {
		this.setState({ searchKeyWord: value });
	};

	getTotalPrice = () => {
		var CurrCarts = this.state.Carts;
		var Total = 0;
		CurrCarts.map(
			(item) =>
				(Total += parseInt(
					item
						.split("-")[2]
						.split("$")
						.pop()
				))
		);
		return Total;
	};

	setSuccAlert = (show) => {
		this.setState({ succAlert: show });
	};

	setFailAlert = (show, error) => {
		this.setState({ failAlert: show, errorMsg: error });
	};

	handleItemDelete = (event, pending_item) => {
		event.preventDefault();
		console.log("pending: ", pending_item);
		var CurrCarts = this.state.Carts;
		CurrCarts = CurrCarts.filter(function(item) {
			return item !== pending_item;
		});
		// console.log(CurrCarts);
		this.setState({ Carts: CurrCarts });
		// this.props.updateCarts(CurrCarts);
	};

	handleCheckOut = () => {
		this.setState({ checkOutOnHide: false });
	};

	submitCheckOut = (event) => {
		event.preventDefault();
		try {
			// post the state information through API to DB

			this.setState({ checkOutOnHide: true });
			this.setSuccAlert(true);
		} catch (error) {
			this.setFailAlert(true, error);
		}
	};

	cancelCreateEvent = () => {
		this.setState({ checkOutOnHide: true });
	};

	changeDeliveryDate = (event) => {
		event.preventDefault();
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({ [name]: value });
	};

	changeTimeInterval = (event) => {
		event.preventDefault();
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({ [name]: value });
	};

	render() {
		console.log("state from cart:", this.state);
		return (
			<div>
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
						<p>You have successfully placed an order!</p>
					</Alert>
					<Alert
						variant="danger"
						show={this.state.failAlert}
						onClose={() => this.setFailAlert(false)}
						dismissible
					>
						<Alert.Heading>
							Oh snap! You got an error!
						</Alert.Heading>
						<p>{this.state.errorMsg}</p>
					</Alert>
					<div className="header">
						<h1 style={{ textAlign: "left" }}>Carts</h1>
						<Button
							variant="primary"
							size="lg"
							style={{ float: "right", marginRight: "2em" }}
							onClick={this.handleCheckOut}
						>
							Check Out
						</Button>
					</div>{" "}
					<div className="body">
						{/* <Tabs defaultActiveKey="Received" id="order_tabs">
							<Tab eventKey="Received" title="Received"> */}
						{/* <SearchField
							placeholder="Search..."
							onChange={this.onChange}
							value={this.state.searchKeyWord}
							searchText=""
							classNames="search-field"
						/> */}

						<Table striped bordered hover responsive variant="dark">
							<thead>
								<tr>
									<th>Box Type</th>
									<th>Box Size</th>
									<th>Price</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{this.state.Carts
									? this.state.Carts.map((item, index) => (
											<tr key={index}>
												<td>
													{(() => {
														switch (
															item.split("-")[1]
														) {
															case "Fruit":
																return "Fruit Box";
															case "Veg":
																return "Vegetable Box";

															default:
																return "Mixed Fruit and Vegetable Box";
														}
													})()}
												</td>
												<td>
													{(() => {
														switch (
															item.split("-")[0]
														) {
															case "S":
																return "Small";
															case "M":
																return "Medium";

															default:
																return "Large";
														}
													})()}
												</td>
												<td>{item.split("-")[2]}</td>
												<td>
													<Button
														variant="info"
														onClick={(e) =>
															this.handleItemDelete(
																e,
																item
															)
														}
													>
														<p>Delete</p>
													</Button>
												</td>
											</tr>
									  ))
									: ""}

								{/* <tr>
									<td>Mixed Box</td>
									<td>Medium</td>
									<td>AU$ 60</td>
									<td>
										<Button variant="info">
											<p>Delete</p>
										</Button>
									</td>
								</tr> */}
							</tbody>
						</Table>
						<Modal
							size="lg"
							aria-labelledby="contained-modal-title-vcenter"
							centered
							show={!this.state.checkOutOnHide}
							onHide={this.cancelCheckOut}
						>
							<Modal.Header>
								<Modal.Title id="contained-modal-title-vcenter">
									Check Out & Delivery Options
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<div className="check_out">
									<Form>
										<Form.Row>
											<Form.Group
												className="formEventName"
												controlId="formGridEventName"
											>
												<Form.Label
													as={Form.col}
													size="sm"
												>
													Total Price
												</Form.Label>
												<Form.Control
													type="Name"
													as={Form.col}
													readOnly={true}
													placeholder={
														"$" +
														this.getTotalPrice()
													}
													size="sm"
													name="Price"
												/>
											</Form.Group>
											<Form.Group
												className="formEventDate"
												controlId="formGridEventDate"
											>
												<Form.Label
													as={Form.col}
													size="sm"
												>
													Delivery Date
												</Form.Label>
												<Form.Control
													type="Date"
													as={Form.col}
													placeholder={
														this.state.Date
													}
													size="sm"
													name="DeliveryDate"
													onChange={(e) =>
														this.changeDeliveryDate(
															e
														)
													}
												/>
											</Form.Group>
											<Form.Group
												as={Form.col}
												controlId="formGridTimeInterval"
											>
												<Form.Label size="sm">
													TimeInterval
												</Form.Label>
												<Form.Control
													as="select"
													placeholder={
														this.state.TimeInterval
													}
													size="sm"
													name="TimeInterval"
													onChange={
														this.changeTimeInterval
													}
													// onSelect={this.handleSelectState}
												>
													<option value=""></option>
													<option value="4pm">
														4pm-5pm
													</option>
													<option value="5pm">
														5pm-6pm
													</option>
													<option value="6pm">
														6pm-7pm
													</option>
												</Form.Control>
											</Form.Group>
										</Form.Row>
									</Form>
								</div>
							</Modal.Body>
							<Modal.Footer>
								<Button
									variant="light"
									onClick={this.cancelCreateEvent}
								>
									Close
								</Button>
								<Button
									type="submit"
									onClick={this.submitCheckOut}
								>
									Submit
								</Button>
							</Modal.Footer>
						</Modal>
						{/* </Tab>
							<Tab eventKey="Confirmed" title="Confirmed"></Tab>
							<Tab eventKey="Shipped" title="Shipped"></Tab>
							<Tab eventKey="Completed" title="Completed"></Tab>
						</Tabs> */}
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Orders);
