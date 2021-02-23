import React, { Component } from "react";
import { AppliCantStatus } from "./applicant-status";

class ApplicantStatusBotton extends Component {
  state = {};
  //   renderStatus = () => {
  //     switch (this.props.status) {
  //       case AppliCantStatus.Rejected:
  //         return <button className="btn btn-danger btn-sm"></button>;
  //       case AppliCantStatus.Accepted:
  //         return <button className="btn btn-success btn-sm"></button>;
  //       case AppliCantStatus.Waiting:
  //         return <button className="btn btn-warning btn-sm"></button>;
  //       default:
  //         throw new Error("status is invalid");
  //     }
  //   };
  render() {
    switch (this.props.status) {
      case AppliCantStatus.Waiting:
        return <span className="badge badge-warning">Waiting</span>;

      // return (
      //   <React.Fragment>
      //     <button className="btn btn-success btn-sm">Accept</button>
      //     <button className="btn btn-danger btn-sm">Reject</button>
      //   </React.Fragment>
      // );
      case AppliCantStatus.Rejected:
        return <span className="badge badge-danger">Rejected</span>;
      case AppliCantStatus.Accepted:
        return <span className="badge badge-success">Accepted</span>;
      default:
        throw new Error("status is invalid");
    }
  }
}

export default ApplicantStatusBotton;
