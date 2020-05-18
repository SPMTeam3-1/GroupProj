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

import "../../styles/AllRoles.scss";

class Orders extends Component {
	state = {
		searchKeyWord: "",
	};

	onChange = (value) => {
		this.setState({ searchKeyWord: value });
	};

	render() {
		return (
			<div>
				<SideBar SideBar={this.SideBar} />
				<div className="content">
					<div className="header">
						<h1 style={{ textAlign: "left" }}>Carts</h1>
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
									<th>Delivery Time</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Fruit Box</td>
									<td>Small</td>
									<td>AU$ 30</td>
									<td>Date:Time</td>
									<td>
										<Button variant="info">
											<p>Delete</p>
										</Button>
									</td>
								</tr>
								<tr>
									<td>Mixed Box</td>
									<td>Medium</td>
									<td>AU$ 60</td>
									<td>Date:Time</td>
									<td>
										<Button variant="info">
											<p>Delete</p>
										</Button>
									</td>
								</tr>
							</tbody>
						</Table>
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
