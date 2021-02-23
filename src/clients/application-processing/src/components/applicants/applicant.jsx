import React, { Component } from "react";

import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "bootstrap/dist/css/bootstrap.css";

import { AppliCantStatus } from "./applicant-status";
import ApplicantStatusBotton from "./applicant-status-button";

class Applicant extends Component {
  state = {
    applicants: [
      {
        id: "1",
        name: "Ali",
        family: "Soltani",
        status: AppliCantStatus.Waiting,
      },
      {
        id: "2",
        name: "Majid",
        family: "Parsa",
        status: AppliCantStatus.Accepted,
      },
      {
        id: "3",
        name: "Mahdi",
        family: "Safari",
        status: AppliCantStatus.Rejected,
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <h1>Applicatnt</h1>
        <div className="form-group">
          <button className="btn btn-danger btn-sm">Add</button>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Family</th>
              <th scope="col">Status</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {this.state.applicants.map((applicant) => (
              <tr key={applicant.id}>
                <td>{applicant.name}</td>
                <td>{applicant.family}</td>
                <td>
                  <ApplicantStatusBotton status={applicant.status} />
                </td>
                <td>
                  <a className="btn btn-primary btn-sm">
                    <FontAwesomeIcon icon={faEdit} />
                  </a>
                  <a className="btn btn-danger btn-sm">
                    <FontAwesomeIcon icon={faTrash} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Applicant;
