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
        <h2 style={{ paddingTop: 20 }}> Do It</h2>
        <div style={{ minHeight: 920 }}>
          <div style={{ marginLeft: this.state.asideOpen ? 275 : 0 }}>
            <div className="card" style={{ border: "0px" }}>
              <table className="table table-striped table-hover table-sm">
                <thead className="thead-inverse">
                  <tr>
                    <th style={{ width: "3%", borderTop: "0px" }} />
                    <th style={{ borderTop: "0px" }}>Nazov</th>

                    <th style={{ width: "20%", borderTop: "0px" }}>Label</th>

                    <th style={{ width: "5%", borderTop: "0px" }}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        id="inline-checkbox1"
                        name="inline-checkbox1"
                        value="option1"
                      />
                    </th>
                    <th>
                      <Input
                        type="text"
                        id="input1-group1"
                        name="input1-group1"
                      />
                    </th>
                    <th>
                      <Input
                        type="text"
                        id="input1-group1"
                        name="input1-group1"
                      />
                    </th>

                    <th>
                      <i class="fa fa-remove " />
                    </th>
                  </tr>

                  <tr
                    onClick={() => this.props.history.push("/secondEditTask")}
                    style={{ cursor: "pointer" }}
                  >
                    <td>
                      <input
                        type="checkbox"
                        id="inline-checkbox1"
                        name="inline-checkbox1"
                        value="option1"
                      />
                    </td>
                    <td>Chleba</td>
                    <td>LIDL</td>

                    <td>
                      <i class="fa fa-remove" />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="row">
                <div class="col">
                  <Pagination>
                    <PaginationItem style={{ margin: 5 }}>
                      Page 1 of 5
                    </PaginationItem>
                  </Pagination>
                </div>
                <div className="col">
                  <Pagination className="justify-content-center">
                    <PaginationItem>
                      <PaginationLink previous href="#">
                        Prev
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="page-item">
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next href="#">
                        Next
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </div>
                <div className="col">
                  <Pagination className="float-right">
                    <PaginationItem style={{ margin: 5 }}>
                      Items per page
                    </PaginationItem>
                    <PaginationItem style={{ marginRight: 10 }}>
                      <select
                        class="form-control"
                        id="project"
                        style={{ maxWidth: 70 }}
                      >
                        {mockOptions.map(opt => (
                          <option key={opt.id} value={opt.id}>
                            {opt.title}
                          </option>
                        ))}
                      </select>
                    </PaginationItem>
                  </Pagination>
                </div>
              </div>
            </div>
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
              <div class="">
                <input
                  type="checkbox"
                  id="inline-checkbox1"
                  name="inline-checkbox1"
                  value="option1"
                />
              </div>
              <div class="mr-auto">
                <h3>Chleba</h3>
              </div>
              <div class="">
                <span class="badge badge-primary pl-2 pr-2 pt-1 pb-1">
                  <h6>Lidl</h6>
                </span>
              </div>
              <div class="">
                {" "}
                <a href="#" className="btn-close">
                  <i className="icon-close" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyTasks;
