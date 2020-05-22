import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter,
} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import { slide as Menu } from "react-burger-menu";

import "../../styles/SideBar.css";
import {
	MdDashboard,
	MdChat,
	MdContacts,
	MdSupervisorAccount,
	MdStore,
	MdLocalBar,
	MdLocalDining,
	MdRateReview,
	MdEvent,
	MdEqualizer,
	MdDescription,
	MdLibraryBooks,
	MdList,
	MdKeyboardArrowDown,
	MdKeyboardArrowUp,
	MdReceipt,
	MdShoppingCart,
} from "react-icons/md";

export default withRouter(
	class SideBar extends Component {
		constructor(props) {
			super(props);
			this.state = {
				convOpen: "closed",
				contOpen: "closed",
				supOpen: "closed",
				salesOpen: "closed",
				reviewOpen: "closed",
				Username: this.props.Username
					? this.props.Username
					: this.props.location.Props.Username,
				Role: this.props.Role
					? this.props.Role
					: this.props.location.Props.Role,
			};
		}

		// handleClick() {
		// 	this.setState({ visible: !this.state.visible });
		// }

		// handleAvatarClick = (event) => {
		// 	// event.preventDefault();
		// 	event.preventDefault();
		// 	// console.log("avatar is clicked, redirecting to account page");
		// 	this.props.history.push("/account");
		// };

		handleItemClick = (event, pageLink) => {
			event.preventDefault();
			// console.log("item is clicked");
			if (pageLink !== this.props.location.pathname) {
				this.handleRedirect(pageLink);
			}
		};

		handleRedirect = (pageLink) => {
			console.log("redirecting to corresponding page");
			this.props.history.push({
				pathname: pageLink,
				Props: { ...this.state },
			});
		};

		// handleConvClick = () => {
		// 	if (this.state.convOpen === "closed") {
		// 		this.setState({ convOpen: "opened" });
		// 	} else {
		// 		this.setState({ convOpen: "closed" });
		// 	}
		// 	console.log("Conversation item is clicked");
		// };

		// handleContClick = () => {
		// 	if (this.state.contOpen === "closed") {
		// 		this.setState({ contOpen: "opened" });
		// 	} else {
		// 		this.setState({ contOpen: "closed" });
		// 	}
		// 	console.log("Contacts item is clicked");
		// };

		// handleSupClick = () => {
		// 	if (this.state.supOpen === "closed") {
		// 		this.setState({ supOpen: "opened" });
		// 	} else {
		// 		this.setState({ supOpen: "closed" });
		// 	}
		// 	console.log("Suppliers item is clicked");
		// };

		// handleSalesClick = () => {
		// 	if (this.state.salesOpen === "closed") {
		// 		this.setState({ salesOpen: "opened" });
		// 	} else {
		// 		this.setState({ salesOpen: "closed" });
		// 	}
		// 	console.log("Sales item is clicked");
		// };

		// handleReviewClick = () => {
		// 	if (this.state.reviewOpen === "closed") {
		// 		this.setState({ reviewOpen: "opened" });
		// 	} else {
		// 		this.setState({ reviewOpen: "closed" });
		// 	}
		// 	console.log("Reviews item is clicked");
		// };

		handleArrow = (state) => {
			if (state === "closed") {
				return <MdKeyboardArrowDown />;
			} else {
				return <MdKeyboardArrowUp />;
			}
		};

		render() {
			console.log("from sidebar state", this.state);
			return (
				<div className="NavBar">
					{/* <h1>Below is for Menu bar</h1> */}
					{/* the menu bar's default width is 300px */}
					<Menu
						noOverlay
						disableOverlayClick
						disableCloseOnEsc
						isOpen={!this.props.menuOpen}
						width={"25%"}
					>
						<Card
							className="menu-avatar"
							onClick={(e) => this.handleItemClick(e, "/account")}
						>
							<Image
								variant="top"
								className="avatarImg"
								style={{
									width: "150px",
									height: "150px",
									display: "inline-block",
									marginLeft: "auto",
									marginRight: "auto",
								}}
								src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
								roundedCircle
							/>
							{/* <Card.Img
								variant="top"
								className="avatarImg"
								style={{
									width: "150px",
									height: "150px",
									display: "block",
									marginLeft: "auto",
									marginRight: "auto"
								}}
								src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
								roundedCircle
							/> */}
							<Card.Body
								style={{
									background: "#bdc3c7",
									textAlign: "center",
								}}
							>
								<Card.Title>
									{this.props.Username
										? this.props.Username
										: this.props.location.Props.Username}
								</Card.Title>
							</Card.Body>
						</Card>
						<p
							id="dashboard"
							className="menu-item"
							onClick={(e) =>
								this.handleItemClick(e, "/dashboard")
							}
						>
							<MdDashboard type="dashboard" /> Dashboard
						</p>
						{/* <p
							id="about"
							className="menu-item"
							onClick={this.handleConvClick}
						>
							<MdChat type="chat" /> Conversations{" "}
							{this.handleArrow(this.state.convOpen)}
						</p> */}
						{/* <div className={this.state.convOpen}>
							<p
								id="email"
								className="menu-item"
								href="/"
								onClick={this.handleItemClick}
							>
								Email
							</p>
							<p
								id="chat"
								className="menu-item"
								href="/"
								onClick={this.handleItemClick}
							>
								Chat
							</p>
						</div> */}
						{/* <p
							id="contacts"
							className="menu-item"
							href="/contacts"
							onClick={this.handleContClick}
						>
							<MdContacts type="contact" /> Contacts{" "}
							{this.handleArrow(this.state.contOpen)}
						</p> */}
						{/* <div className={this.state.contOpen}>
							<p
								id="customers"
								className="menu-item"
								onClick={(e) =>
									this.handleItemClick(e, "/customers")
								}
							>
								Customers
							</p>
							<p
								id="suppliers"
								className="menu-item"
								href="/"
								onClick={(e) =>
									this.handleItemClick(e, "/suppliers")
								}
							>
								Suppliers
							</p>
						</div>
						<p
							id="roles"
							className="menu-item--small"
							onClick={(e) =>
								this.handleItemClick(e, "/allroles")
							}
						>
							<MdSupervisorAccount type="supervisor" /> All Roles
						</p>
						<p
							id="suppliers"
							className="menu-item"
							href="/"
							onClick={this.handleSupClick}
						>
							<MdStore type="store" /> Suppliers{" "}
							{this.handleArrow(this.state.supOpen)}
						</p>
						<div className={this.state.supOpen}>
							<p
								id="winery"
								className="menu-item"
								href="/"
								onClick={(e) =>
									this.handleItemClick(e, "/suppliers_winery")
								}
							>
								Winery
							</p>
							<p
								id="masterCellar"
								className="menu-item"
								href="/"
								onClick={this.handleItemClick}
							>
								Master Cellar
							</p>
							<p
								id="eventOrg"
								className="menu-item"
								href="/"
								onClick={this.handleItemClick}
							>
								Event Org
							</p>
						</div> */}
						<p
							id="orders"
							className="menu-item"
							onClick={(e) => this.handleItemClick(e, "/orders")}
						>
							<MdReceipt type="bar" /> Orders
						</p>
						{this.state.Role === "Admin" ? (
							<p />
						) : (
							<p
								id="shopping_cart"
								className="menu-item"
								onClick={(e) =>
									this.handleItemClick(e, "/cart")
								}
							>
								<MdShoppingCart type="bar" /> Shopping Cart
							</p>
						)}
						{/* <p
							id="food_pairing"
							className="menu-item"
							href="/"
							onClick={this.handleItemClick}
						>
							<MdLocalDining type="localDining" /> Food Pairing
						</p> */}
						{/* <p
							id="sales"
							className="menu-item"
							href="/"
							onClick={this.handleSalesClick}
						>
							<MdEqualizer type="equalizer" /> Sales{" "}
							{this.handleArrow(this.state.salesOpen)}
						</p> */}
						{/* <div className={this.state.salesOpen}>
							<p
								id="orders"
								className="menu-item"
								onClick={(e) =>
									this.handleItemClick(e, "/orders")
								}
							>
								Orders
							</p>
							<p
								id="invoices"
								className="menu-item"
								onClick={(e) =>
									this.handleItemClick(e, "/invoices")
								}
							>
								Invoices
							</p>
							<p
								id="shipping"
								className="menu-item"
								href="/"
								onClick={this.handleItemClick}
							>
								Shipping
							</p>
							<p
								id="coupon"
								className="menu-item"
								href="/"
								onClick={this.handleItemClick}
							>
								Coupon
							</p>
						</div>
						<p
							id="reviews"
							className="menu-item"
							href="/"
							onClick={this.handleReviewClick}
						>
							<MdRateReview type="rateReview" /> Reviews{" "}
							{this.handleArrow(this.state.reviewOpen)}
						</p>
						<div className={this.state.reviewOpen}>
							<p
								id="productReview"
								className="menu-item"
								onClick={(e) =>
									this.handleItemClick(e, "/product_review")
								}
							>
								Product Review
							</p>
							<p
								id="feedbackReview"
								className="menu-item"
								onClick={(e) =>
									this.handleItemClick(e, "/feedback_review")
								}
							>
								Feedback Review
							</p>
						</div>
						<p
							id="events"
							className="menu-item"
							onClick={(e) => this.handleItemClick(e, "/events")}
						>
							<MdEvent type="events" /> Events
						</p>
						<p
							id="billing"
							className="menu-item"
							onClick={(e) => this.handleItemClick(e, "/billing")}
						>
							<MdDescription type="description" /> Billing
						</p>
						<p
							id="reports"
							className="menu-item"
							href="/"
							onClick={(e) => this.handleItemClick(e, "/reports")}
						>
							<MdLibraryBooks type="libraryBooks" /> Reports
						</p> */}
						<a id="about" className="menu-item" href="/about">
							About
						</a>
						<a href="/">Log Out</a>
					</Menu>
				</div>
			);
		}
	}
);
