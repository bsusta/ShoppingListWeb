import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from "reactstrap";

class Project extends Component {
  render() {
    return (
      <div style={{ paddingLeft: 20, paddingRight: 20 }}>
        <h2 style={{ marginTop: 20 }}>
          Project{" "}
          <a
            href="#/project/0"
            class="fa fa-info-circle fa-lg"
            style={{
              border: "none",
              backgroundColor: "white",
              color: "grey",
              textDecoration: "none"
            }}
          />
        </h2>

        <button type="button" class="btn btn-link pl-0">
          <i className="fa fa-filter" />
        </button>
        <button type="button" class="btn btn-link">
          My Active
        </button>
        <button type="button" class="btn btn-link">
          All Active
        </button>
        <button type="button" class="btn btn-link">
          Closed
        </button>
        <button type="button" class="btn btn-link">
          All
        </button>

        <button type="button" class="btn btn-link float-right pr-0">
          <i className="fa fa-columns" />
        </button>

        <div className="card" style={{ border: "0px" }}>
          <table className="table table-striped table-hover table-sm">
            <thead className="thead-inverse">
              <tr>
                <th style={{ width: "3%", borderTop: "0px" }}>#</th>
                <th style={{ width: "5%", borderTop: "0px" }}>Status</th>
                <th style={{ borderTop: "0px" }}>Názov</th>
                <th style={{ width: "10%", borderTop: "0px" }}>Zadal</th>
                <th style={{ width: "10%", borderTop: "0px" }}>Firma</th>
                <th style={{ width: "10%", borderTop: "0px" }}>Rieši</th>
                <th style={{ width: "10%", borderTop: "0px" }}>Projekt</th>
                <th style={{ width: "10%", borderTop: "0px" }}>Created</th>
                <th style={{ width: "10%", borderTop: "0px" }}>Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <Input type="text" id="input1-group1" name="input1-group1" />
                </th>
                <th>
                  <Input type="text" id="input1-group1" name="input1-group1" />
                </th>
                <th>
                  <Input type="text" id="input1-group1" name="input1-group1" />
                </th>
                <th>
                  <Input type="text" id="input1-group1" name="input1-group1" />
                </th>
                <th>
                  <Input type="text" id="input1-group1" name="input1-group1" />
                </th>
                <th>
                  <Input type="text" id="input1-group1" name="input1-group1" />
                </th>
                <th>
                  <Input type="text" id="input1-group1" name="input1-group1" />
                </th>
                <th>
                  <Input type="text" id="input1-group1" name="input1-group1" />
                </th>
                <th>
                  <Input type="text" id="input1-group1" name="input1-group1" />
                </th>
              </tr>
              <tr style={{ cursor: "pointer" }}>
                <td style={{ verticalAlign: "center" }}>1</td>
                <td>
                  <span class="badge badge-success">NEW</span>
                </td>
                <td onClick={() => this.props.history.push("/editTask")}>
                  Oprava PC
                  <p>
                    <span class="badge badge-primary mr-1">Primary</span>
                    <span class="badge badge-secondary mr-1">Secondary</span>
                    <span class="badge badge-success mr-1">Success</span>
                    <span class="badge badge-danger mr-1">Danger</span>
                  </p>
                </td>
                <td>bsusta</td>
                <td>LAN Systems</td>
                <td>amichalica</td>
                <td>Hotline</td>
                <td>15:37 9.12.2017</td>
                <td>15:37 9.12.2017</td>
              </tr>
              <tr style={{ cursor: "pointer" }}>
                <td>2</td>
                <td>
                  <span class="badge badge-success">NEW</span>
                </td>
                <td>
                  Oprava PC
                  <p>
                    <span class="badge badge-primary mr-1">Primary</span>
                    <span class="badge badge-secondary mr-1">Secondary</span>
                    <span class="badge badge-success mr-1">Success</span>
                    <span class="badge badge-danger mr-1">Danger</span>
                  </p>
                </td>
                <td>bsusta</td>
                <td>LAN Systems</td>
                <td>amichalica</td>
                <td>Hotline</td>
                <td>15:37 9.12.2017</td>
                <td>15:37 9.12.2017</td>
              </tr>
              <tr style={{ cursor: "pointer" }}>
                <td>3</td>
                <td>
                  <span class="badge badge-success">NEW</span>
                </td>
                <td>
                  Oprava PC
                  <p>
                    <span class="badge badge-primary mr-1">Primary</span>
                    <span class="badge badge-secondary mr-1">Secondary</span>
                    <span class="badge badge-success mr-1">Success</span>
                    <span class="badge badge-danger mr-1">Danger</span>
                  </p>
                </td>
                <td>bsusta</td>
                <td>LAN Systems</td>
                <td>amichalica</td>
                <td>Hotline</td>
                <td>15:37 9.12.2017</td>
                <td>15:37 9.12.2017</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Project;
