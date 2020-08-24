import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import {
  MDBNavLink,
  MDBBtn,
  MDBSwitch,
  MDBContainer,
  MDBCol,
  MDBRow
} from "mdbreact";
import ParcerResults from "./parcerResults.jsx";
import ParcerSettings from "./parcerSettings.jsx";

class Parcer extends Component {
  state = {
    isRunning: false
  };

  handleSubmit = values => {
    let { isRunning } = this.state;
    if (isRunning) {
      isRunning = false;
    } else {
      isRunning = true;
    }
    this.setState({ isRunning });
    if (!isRunning) {
      console.log("stopped", values);
    }
    if (isRunning) {
      console.log("working", values);
    }
  };

  render() {
    const { isLoggedIn, user, userLoadingInProgress } = this.props;
    let { isRunning } = this.state;
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol size={12}>
              <div className="rightBordered">
                <h3>Управление парсером</h3>
                <br />
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size={4}>
              <ParcerSettings
                onSubmit={this.handleSubmit}
                user={user}
                isLoggedIn={isLoggedIn}
                isRunning={isRunning}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size={12}>
              <ParcerResults />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default withRouter(Parcer);
