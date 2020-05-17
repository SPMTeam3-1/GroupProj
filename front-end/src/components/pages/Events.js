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
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "../../styles/Events.scss";

class Events extends Component {
	state = {
		searchKeyWord: "",
		eventOnHide: true,
		viewMode: true,
		event_data: [],
		wineries: [],
		current_item: [],
	};

	onChange = (value) => {
		this.setState({ searchKeyWord: value });
	};

	handleEventView = (item) => {
		// this.setState({ eventOnHide: false });
		this.setState({
			current_item: item,
			eventOnHide: false,
			viewMode: true,
		});
	};

	handleEventEdit = (item) => {
		// this.setState({ eventOnHide: false });
		this.setState({
			current_item: item,
			eventOnHide: false,
			viewMode: false,
		});
	};

	cancelCreateEvent = (event) => {
		this.setState({ eventOnHide: true });
	};

	submitCreateEvent = (event) => {
		try {
			// post the state information through API to DB
			// except the searchKeyWord, two alerts, errorMsg and eventOnHide
		} catch (error) {
			this.setFailAlert(true, error);
		}
	};

	handleViewEvent = () => {
		return (
			<Modal
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={!this.state.eventOnHide}
				// onHide={this.cancelCreateEvent}
			>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter">
						Create an event
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="create_event">
						<Form>
							<Form.Row>
								<Form.Group
									className="formEventName"
									controlId="formGridEventName"
								>
									<Form.Label as={Form.col} size="sm">
										Event Name
									</Form.Label>
									<Form.Control
										type="Name"
										as={Form.col}
										placeholder={
											this.state.current_item.title
										}
										size="sm"
										name="Name"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
								<Form.Group
									className="formEventDate"
									controlId="formGridEventDate"
								>
									<Form.Label as={Form.col} size="sm">
										Event Date
									</Form.Label>
									<Form.Control
										type="Date"
										as={Form.col}
										placeholder={
											this.state.current_item.eventDate
										}
										size="sm"
										name="Date"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
								<Form.Group
									className="formMaximumPeople"
									controlId="formGridMaximumPeople"
								>
									<Form.Label as={Form.col} size="sm">
										Maximum People
									</Form.Label>
									<Form.Control
										type="Maximum People"
										as={Form.col}
										placeholder={
											this.state.current_item
												.maximum_population
										}
										size="sm"
										name="MaxPeoPle"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group
									as={Form.col}
									controlId="formGridAddress1"
								>
									<Form.Label size="sm">Address 1</Form.Label>
									<Form.Control
										placeholder={
											this.state.current_item.Address_1
										}
										size="sm"
										name="Address_1"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
								<Form.Group
									as={Form.col}
									controlId="formGridAddress2"
								>
									<Form.Label size="sm">Address 2</Form.Label>
									<Form.Control
										placeholder={this.state.Address_2}
										size="sm"
										name="Address_2"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
								<Form.Group
									as={Form.col}
									controlId="formGridCity"
								>
									<Form.Label size="sm">City</Form.Label>
									<Form.Control
										placeholder={this.state.City}
										size="sm"
										name="City"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group
									as={Form.col}
									controlId="formGridState"
								>
									<Form.Label size="sm">State</Form.Label>
									<Form.Control
										as="select"
										placeholder={this.state.State}
										size="sm"
										name="State"
										onSelect={this.changeCreateEvent}
										disabled={this.state.viewMode}
										// onSelect={this.handleSelectState}
									>
										<option
											value=""
											disabled
											selected
											hidden
										>
											Please Choose...
										</option>
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
									<Form.Label size="sm">Postcode</Form.Label>
									<Form.Control
										placeholder={this.state.Postcode}
										size="sm"
										name="Postcode"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group
									as={Form.col}
									controlId="formGridStartTime"
								>
									<Form.Label size="sm">
										Time start from
									</Form.Label>
									<Form.Control
										placeholder={
											this.state.current_item.startPeriod
										}
										size="sm"
										name="StartTime"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
								<Form.Group
									as={Form.col}
									controlId="formGridFinishTime"
								>
									<Form.Label size="sm">
										Time finish at
									</Form.Label>
									<Form.Control
										placeholder={
											this.state.current_item.endPeriod
										}
										size="sm"
										name="FinishTime"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
								<Form.Group
									as={Form.col}
									controlId="formGridDressCode"
								>
									<Form.Label size="sm">
										Dress code
									</Form.Label>
									<Form.Control
										placeholder={this.state.DressCode}
										size="sm"
										name="DressCode"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group
									as={Form.col}
									controlId="formGridFacilities"
								>
									<Form.Label size="sm">
										Facilities
									</Form.Label>
									<Form.Control
										placeholder={this.state.Facilities}
										size="sm"
										name="Facilities"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
								<Form.Group
									as={Form.col}
									controlId="formGridEmail"
								>
									<Form.Label size="sm">Email</Form.Label>
									<Form.Control
										placeholder={this.state.Email}
										size="sm"
										name="Email"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group
									controlId="formGridDescription"
									className="event_description"
								>
									<Form.Label size="sm">
										Descriptions
									</Form.Label>
									<Form.Control
										as="textarea"
										rows="4"
										placeholder={
											this.state.current_item.description
										}
										size="lg"
										name="Descriptions"
										onChange={this.changeCreateEvent}
										disabled={this.state.viewMode}
									/>
								</Form.Group>
							</Form.Row>
						</Form>
					</div>
				</Modal.Body>
				<Modal.Footer>
					{!this.state.viewMode ? (
						<Button type="submit" onClick={this.submitCreateEvent}>
							Submit
						</Button>
					) : (
						""
					)}
					<Button variant="light" onClick={this.cancelCreateEvent}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	};

	async componentDidMount() {
		try {
			/* fetch event list and save it to state as event_data*/
			var url =
				"https://dy4v35a040.execute-api.ap-southeast-2.amazonaws.com/latest/home/event";
			var response = await fetch(url);
			var data = await response.json();
			await this.setState({ event_data: data.date });
			/* fetch winery list and save it to state as wineries*/
			var url =
				"https://dy4v35a040.execute-api.ap-southeast-2.amazonaws.com/latest/home/winery";
			var response = await fetch(url);
			var data = await response.json();
			await this.setState({ wineries: data });
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		console.log(this.state.event_data);
		return (
			<div>
				<SideBar
					SideBar={this.SideBar}
					menuOpen={!this.state.eventOnHide}
				/>
				<div className="content">
					{this.handleViewEvent()}
					<div className="header">
						<h1 style={{ textAlign: "left" }}>Events</h1>
					</div>{" "}
					<div className="body">
						<SearchField
							placeholder="Search..."
							onChange={this.onChange}
							value={this.state.searchKeyWord}
							searchText=""
							classNames="search-field"
						/>
						<Table striped bordered hover responsive variant="dark">
							<thead>
								<tr>
									<th>Event Name</th>
									<th>Event Org</th>
									<th>Event Date</th>
									<th>Start From</th>
									<th>Maximum Population</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{this.state.event_data.map((item, key) => (
									<tr key={key}>
										<td>{item.title}</td>
										<td>
											{this.state.wineries
												.filter(
													(winery) =>
														item.winery_id ===
														winery.id
												)
												.map(
													(winery) =>
														winery.Alphabetical_Index
												)}
										</td>
										<td>{item.eventDate}</td>
										<td>{item.startPeriod}</td>
										<td>{item.maximum_population}</td>
										<td>
											<Button
												className="event_btn"
												variant="info"
												size="sm"
												onClick={() =>
													this.handleEventView(item)
												}
											>
												<p>View</p>
											</Button>
											<Button
												className="event_btn"
												variant="info"
												size="sm"
												onClick={() =>
													this.handleEventEdit(item)
												}
											>
												<p>More</p>
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Events);
