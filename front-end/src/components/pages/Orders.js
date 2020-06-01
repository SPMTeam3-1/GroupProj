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
	constructor(props) {
		super(props);
		this.state = {
            searchKeyWord: "",
            orders: []
		};
	}

	async componentDidMount() {
        // push user and role to fetch order data accordingly.
        this.fetchOrders()
    }

    fetchOrders() {
        const data = {
            username: this.props.location.Props.Username,
            role: this.props.location.Props.Role
        }

        fetch('http://localhost:3000/orders/all', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data})
        })
        .then(res => res.json())
        .then(json => {
            console.log(json.data)
            this.setState({orders: json.data})
        })
    }
    
    cancelOrder(orderNo, orderSize, orderType) {
        const data = {
            username: this.props.location.Props.Username,
            type: orderType,
            size: orderSize
        }
        fetch(`http://localhost:3000/orders/${orderNo}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data})
        })
        .then(res => res.json())
        .then(json => {
            if (json.status === '200') {
                this.fetchOrders()
            }
        })
    }

	onChange = (value) => {
		this.setState({ searchKeyWord: value });
	};

	render() {
		// console.log("from orders: ", this.props);
		return (
			<div>
				<SideBar
					SideBar={this.SideBar}
					Username={this.props.Username}
					Role={this.props.Role}
					Carts={this.props.Carts}
				/>
				<div className="content">
					<div className="header">
						<h1 style={{ textAlign: "left" }}>Orders</h1>
					</div>{" "}
					<div className="body">
						<Tabs defaultActiveKey="Received" id="order_tabs">
							<Tab eventKey="Received" title="Received">
								<SearchField
									placeholder="Search..."
									onChange={this.onChange}
									value={this.state.searchKeyWord}
									searchText=""
									classNames="search-field"
								/>

								<Table
									striped
									bordered
									hover
									responsive
									variant="dark"
								>
									<thead>
										<tr>
											<th>Order ID</th>
											<th>Customer Name</th>
											<th>Produce Boxes</th>
											<th>Status</th>
											<th>Total Cost</th>
                                            <th>Delivery Time</th>
											<th>Actions</th>
										</tr>
									</thead>
                                    <tbody>
                                        {
                                            this.state.orders.length > 0
                                            ?
                                                this.state.orders.map((order, i) => {
                                                    if (order === undefined)
                                                        return

                                                    const deliveryDate = new Date(order.delivery_time)
                                                    return (
                                                        <tr key={i}>
                                                            <td>{order.no}</td>
                                                            <td>{this.props.location.Props.Username}</td>
                                                            <td>{order.type} - {order.size}</td>
                                                            <td>{order.status}</td>
                                                            <td>{order.price}</td>
                                                            <td>{deliveryDate.toString()}</td>
                                                            <td>
                                                                {
                                                                    this.props.location.Props.Role === 'Admin' || order.status !== 'pending'
                                                                        ? null
                                                                        :
                                                                        <Button variant="info" onClick={_ => this.cancelOrder(order.no, order.size, order.type)}>
                                                                            <p>Cancel order</p>
                                                                        </Button>
                                                                }
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            : null
                                        }
                                    </tbody>
								</Table>
							</Tab>
							<Tab eventKey="Completed" title="Completed"></Tab>
						</Tabs>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Orders);
