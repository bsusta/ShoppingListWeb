import React, { Component } from "react";

import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Input
} from "reactstrap";

let mockOptions = [
  { id: 0, title: "20" },
  { id: 1, title: "50" },
  { id: 2, title: "100" },
  { id: 3, title: "all" }
];
class MyTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asideOpen: false,
      modalTaskOpen: false
    };
    this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalTaskOpen: !this.state.modalTaskOpen });
  }

  render() {
    return (
      <div style={{ paddingLeft: 20, paddingRight: 20 }}>
        <h2 style={{ paddingTop: 20, paddingBottom: 10 }}> Do It</h2>
        <div style={{ minHeight: 920 }}>
          <div style={{ marginLeft: this.state.asideOpen ? 275 : 0 }}>
            <input
              type="text"
              class="form-control"
              id="add_item"
              placeholder="Enter item name"
            />

            <div
              class="d-flex flex-row"
              style={{
                border: "1px solid #c2cfd6",
                padding: "0.75rem 1.25rem",
                backgroundColor: "#f0f3f5",
                marginTop: 20
              }}
            >
              <div class="d-flex align-items-center">
                <input
                  type="checkbox"
                  id="inline-checkbox1"
                  name="inline-checkbox1"
                  value="option1"
                />
              </div>
              <div class="mr-auto pl-3 d-flex align-items-center">
                <h3 className="mb-0">Chleba</h3>
              </div>
              <div class="pr-2 d-flex align-items-center">
                <span class="badge badge-primary pl-2 pr-2 ">
                  <h6 className="mb-0">Lidl</h6>
                </span>
              </div>
              <div class="d-flex align-items-center">
                {" "}
                <i class="fa fa-remove fa-lg " />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyTasks;
