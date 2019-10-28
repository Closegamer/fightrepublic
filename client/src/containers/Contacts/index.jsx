import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact';
import ContactForm from './contactForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as publicActions from '../../ducks/public';

export class Contacts extends Component {
  handleSubmit = values => {
    const user = values.user;
    const header = values.header;
    const message = values.message;
    this.props.publicActions.userSendMessage(user, header, message);
    this.props.history.push('/');
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
      <MDBContainer className='main-container' fluid>
        <MDBRow>
          <MDBCol xl='12' xs='12' className='contentArea-container'>
            <h3>Контактная информация</h3>
            <br />
            <br />
            <MDBRow>
              <MDBCol xl='4' sm='4' md='4' xs='12'>
                <h5>
                  Форма обратной связи для записи на занятия и по любым другим
                  вопросам
                </h5>
                <ContactForm
                  onSubmit={this.handleSubmit}
                  user={user}
                  isLoggedIn={isLoggedIn}
                  initialValues={initialValues}
                />
              </MDBCol>
              <MDBCol xl='8' sm='8' md='8' xs='12'>
                <MDBRow>
                  <MDBCol xl='6' sm='6' md='6' xs='12'>
                    <h5>Часы работы</h5>
                    <br />
                    <p>ПН-ПТ: 7:00 - 23:00</p>
                    <p>СБ-ВС: 9:00 - 20:00</p>
                    <br />
                    <h5>Наш адрес</h5>
                    <br />
                    <p>1-Нагатинский проезд, дом 2, стр. 7</p>
                    <br />
                    <h5>Наш телефон</h5>
                    <br />
                    <p>+7 495 220-26-24</p>
                    <p>+7 985 220-26-24</p>
                  </MDBCol>
                </MDBRow>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
