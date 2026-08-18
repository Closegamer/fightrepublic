import React, { Component } from "react";
import { MDBRow, MDBContainer, MDBCol, MDBBtn } from "mdbreact";
// import ContactForm from "./contactForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as publicActions from "../../ducks/public";

export class Parcer extends Component {
  handleSubmit = values => {
    const user = values.user;
    const header = values.header;
    const message = values.message;
    this.props.publicActions.userSendMessage(user, header, message);
    this.props.history.push("/");
  };

  render() {
    const { isLoggedIn, user, userLoadingInProgress } = this.props;

    if (userLoadingInProgress) return <div>спинер</div>;

    let initialValues = null;

    if (isLoggedIn) {
      initialValues = {
        user: user.nick,
        email: user.email
      };
    } else {
      initialValues = {};
    }

    return (
      <MDBContainer className="main-container" fluid>
        <MDBRow>
          <MDBCol xl="12" xs="12" className="contentArea-container">
            <h3>Рейтинг сайтов</h3>
            <br />
            <br />
            <MDBRow>
              <MDBCol xl="12" sm="12" md="12" xs="12">
                Управление
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size={12}>
                <MDBBtn
                  color="success"
                  size="md"
                  className="waves-light adminBtn"
                >
                  Запустить
                </MDBBtn>
                <MDBBtn
                  color="danger"
                  size="md"
                  className="waves-light adminBtn"
                >
                  Остановить
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol xl="12" sm="12" md="12" xs="12">
                Результаты
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  user: auth.user,
  userLoadingInProgress: auth.userLoadingInProgress
});

const mapDispatchToProps = dispatch => ({
  publicActions: bindActionCreators({ ...publicActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Parcer);
