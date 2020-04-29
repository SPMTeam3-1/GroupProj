import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
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
    searchKeyWord: ""
  };

  onChange = value => {
    this.setState({ searchKeyWord: value });
  };

  render() {
    return (
      <div>
        <SideBar SideBar={this.SideBar} />
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

                <Table striped bordered hover responsive variant="dark">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>From</th>
                      <th>Bill To</th>
                      <th>Status</th>
                      <th>Total Cost</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#000001</td>
                      <td>Customer X</td>
                      <td>Supplier X</td>
                      <td>Received</td>
                      <td>AU$ 30</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>More</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>1.1.1</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>More</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>1.1.1</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>More</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>1.1.1</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>More</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>1.1.1</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>More</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>1.1.1</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>More</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>1.1.1</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>More</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>1.1.1</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>More</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>1.1.1</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>More</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>1.1.1</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>More</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>1.1.1</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>More</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>1.1.1</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>More</p>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="Confirmed" title="Confirmed"></Tab>
              <Tab eventKey="Shipped" title="Shipped"></Tab>
              <Tab eventKey="Completed" title="Completed"></Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Orders);
