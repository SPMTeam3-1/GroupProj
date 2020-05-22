import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	withRouter,
} from "react-router-dom";
import regeneratorRuntime from "regenerator-runtime";

import Header from "./components/layout/Header";
import Dashboard from "./components/pages/Dashboard";
import SideBar from "./components/pages/SideBar";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import About from "./components/pages/About";
import Account from "./components/pages/Account";
import Orders from "./components/pages/Orders";
import uuid from "uuid";
import test from "./components/pages/test";

import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/pages/Cart";

// import Axios from "axios";

class App extends Component {
	state = {
		Orders: [
			// {
			// 	id: uuid.v4(),
			// 	title: "Take out the trash",
			// 	completed: false
			// },
			// {
			// 	id: uuid.v4(),
			// 	title: "Todo 2",
			// 	completed: false
			// },
			// {
			// 	id: uuid.v4(),
			// 	title: "Todo 3",
			// 	completed: false
			// }
		],
		Username: "",
		Role: "",
	};

	async componentDidMount() {
		// try {
		// 	/* fetch wine list with parameter wineID and save it to state as wine_list*/
		// 	var url = ``;
		// 	var response = await fetch(url);
		// 	var data = await response.json();
		// 	console.log("product list", data);
		// 	// await this.setState({ event_data: data.date });
		// } catch (err) {
		// 	console.log(err);
		// }
		// fetch order information here
	}

	updateUsername = (username) => {
		this.setState({ Username: username });
	};

	// updatePassword = (password) => {
	// 	this.setState({ Password: password });
	// };

	updateRole = (role) => {
		this.setState({ Role: role });
	};

	getUsername = () => {
		return this.state.Username;
	};

	// Delete Todo
	delTodo = (id) => {
		this.setState({
			Dashboard: [
				...this.state.Dashboard.filter((todo) => todo.id !== id),
			],
		});
	};

	// Add Todo
	SideBar = (title) => {
		const newTodo = {
			id: uuid.v4(),
			title,
			completed: false,
		};
		this.setState({ Dashboard: [...this.state.Dashboard, newTodo] });
	};

	render() {
		console.log("from app: ", this.state);
		return (
			<Router>
				<div className="App">
					<Route
						exact
						path="/"
						component={() => (
							<Login
								updateUsername={this.updateUsername}
								updatePassword={this.updatePassword}
								updateRole={this.updateRole}
							/>
						)}
					/>
					<div className="con">
						<Switch>
							<Route
								path="/dashboard"
								render={(props) => (
									<React.Fragment>
										{/* <SideBar SideBar={this.SideBar} /> */}
										<Dashboard
											Orders={this.state.Orders}
											Username={this.state.Username}
											Role={this.state.Role}
										/>
									</React.Fragment>
								)}
							/>
							<Route path="/signup" component={Signup} />
							<Route path="/about" component={About} />
							<Route
								path="/account"
								component={Account}
								Username={this.state.Username}
								Role={this.state.Role}
							/>
							<Route
								path="/orders"
								component={Orders}
								Orders={this.state.Orders}
								Username={this.state.Username}
								Role={this.state.Role}
							/>
							<Route
								path="/cart"
								component={Cart}
								Orders={this.state.Orders}
								Username={this.state.Username}
								Role={this.state.Role}
							/>
						</Switch>
						{/* <Header /> */}
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
