import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleLoginForm, logout } from '../../ducks/auth';
import { toggleBalanceForm } from '../../ducks/balance';
import { withRouter } from 'react-router-dom';
import injectSheet from 'react-jss';
import logo from '../../img/Logotip_FR-07.png';
import navBg from '../../img/club10.jpeg';
import WaveComponent from '../../components/WaveComponent';
import './styles.css';

import {
  MDBNavbarBrand,
  MDBInput,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBSideNavItem,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav
} from 'mdbreact';

export class Navigator extends Component {
  static propTypes = {
    toggleLoginForm: PropTypes.func.isRequired,
    toggleBalanceForm: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  };

  state = {
    leftMenuIsOpen: false
  };

  toggleLeftMenu = () => {
    this.setState({
      leftMenuIsOpen: !this.state.leftMenuIsOpen
    });
  };

  render() {
    const specialCaseNavbarStyles = {
      WebkitBoxOrient: 'horizontal',
      flexDirection: 'row'
    };

    const { classes, isLoggedIn, user, balance } = this.props;

    return (
      <div className='mdb-skin'>
        <MDBSideNav
          logo={logo}
          triggerOpening={this.state.leftMenuIsOpen}
          bg={navBg}
          mask='strong'
          hidden
          className={classes.root}
        >
          <li>
            <ul className='social'>
              <li>
                <a href='#!'>
                  <MDBIcon fab icon='facebook-f' />
                </a>
              </li>
              <li>
                <a href='#!'>
                  <MDBIcon fab icon='pinterest' />
                </a>
              </li>
              <li>
                <a href='#!'>
                  <MDBIcon fab icon='google-plus-g' />
                </a>
              </li>
              <li>
                <a href='#!'>
                  <MDBIcon fab icon='twitter' />
                </a>
              </li>
            </ul>
          </li>
          <MDBSideNavNav>
            <MDBSideNavCat
              name='Информация'
              id='submit-blog-cat'
              icon='question-circle'
            >
              <MDBSideNavItem href='/price'>Цены</MDBSideNavItem>
              <MDBSideNavItem href='/info'>Единоборства</MDBSideNavItem>
            </MDBSideNavCat>
            <MDBSideNavCat
              iconRegular
              name='Расписание'
              id='instruction-cat'
              icon='calendar-alt'
            >
              <MDBSideNavItem href='/schedule/mon'>Понедельник</MDBSideNavItem>
              <MDBSideNavItem href='/schedule/tue'>Вторник</MDBSideNavItem>
              <MDBSideNavItem href='/schedule/wed'>Среда</MDBSideNavItem>
              <MDBSideNavItem href='/schedule/thu'>Четверг</MDBSideNavItem>
              <MDBSideNavItem href='/schedule/fri'>Пятница</MDBSideNavItem>
              <MDBSideNavItem href='/schedule/sat'>Суббота</MDBSideNavItem>
              <MDBSideNavItem href='/schedule/sun'>Воскресенье</MDBSideNavItem>
            </MDBSideNavCat>
            <MDBSideNavCat name='О клубе' id='about-cat' icon='crown'>
              <MDBSideNavItem href='/masters'>Тренеры</MDBSideNavItem>
              <MDBSideNavItem href='/photos'>Фотографии</MDBSideNavItem>
            </MDBSideNavCat>
            <MDBSideNavCat name='Контакты' id='contact-me-cat' icon='bullhorn'>
              <MDBSideNavItem href='/contacts'>Обратная связь</MDBSideNavItem>
            </MDBSideNavCat>
          </MDBSideNavNav>
        </MDBSideNav>
        <MDBNavbar double expand='md' fixed='top' scrolling dark color='black'>
          <div className='logo-cont text-center'>
            <MDBNavbarBrand href='/'>
              <img src={logo} className='img-fluid logo' alt='FR-logo' />
            </MDBNavbarBrand>
          </div>
          <MDBNavbarNav left>
            <MDBNavItem>
              <div
                onClick={this.toggleLeftMenu}
                key='sideNavToggleA'
                style={{
                  lineHeight: '32px',
                  marginRight: '1em',
                  verticalAlign: 'middle'
                }}
              >
                <MDBIcon icon='bars' color='white' />
              </div>
            </MDBNavItem>

            {isLoggedIn && (
              <React.Fragment>
                <MDBNavItem>
                  <MDBNavLink to='#'>
                    <div className='d-md-inline'>Вы вошли как {user.nick}</div>
                  </MDBNavLink>
                </MDBNavItem>
              </React.Fragment>
            )}
          </MDBNavbarNav>
          <MDBNavbarNav right style={specialCaseNavbarStyles}>
            <MDBNavItem
              active={this.props.location.pathname.includes('/info')}
              className='d-none d-sm-block'
            >
              <MDBNavLink to='/info'>
                <MDBIcon icon='info-circle' className='d-inline-inline' />{' '}
                <div className='d-none d-md-inline'>Инфо</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem
              active={this.props.location.pathname.includes('/price')}
              className='d-none d-sm-block'
            >
              <MDBNavLink to='/price'>
                <MDBIcon icon='money-bill' className='d-inline-inline' />{' '}
                <div className='d-none d-md-inline'>Цены</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem
              active={this.props.location.pathname.includes('/contacts')}
              className='d-none d-sm-block'
            >
              <MDBNavLink to='/contacts'>
                <MDBIcon icon='comments' className='d-inline-inline' />{' '}
                <div className='d-none d-md-inline'>Контакты</div>
              </MDBNavLink>
            </MDBNavItem>
            {!isLoggedIn && (
              <MDBNavItem>
                <WaveComponent
                  onClick={this.props.toggleLoginForm}
                  tag='a'
                  className='nav-link'
                >
                  <MDBIcon icon='sign-in-alt' className='d-inline-inline' />{' '}
                  <div className='d-none d-md-inline'>Войти</div>
                </WaveComponent>
              </MDBNavItem>
            )}
            {isLoggedIn && (
              <React.Fragment>
                <MDBNavItem>
                  <WaveComponent
                    onClick={this.props.logout}
                    tag='a'
                    className='nav-link'
                  >
                    <MDBIcon icon='sign-out-alt' className='d-inline-inline' />{' '}
                    <div className='d-none d-md-inline'>Выйти</div>
                  </WaveComponent>
                </MDBNavItem>
                {user.role === 'admin' && (
                  <MDBNavItem
                    active={this.props.location.pathname.includes('/admin')}
                  >
                    <MDBNavLink to='/admin'>
                      <MDBIcon icon='laptop-code' className='d-inline-inline' />{' '}
                      <div className='d-none d-md-inline'>Админка</div>
                    </MDBNavLink>
                  </MDBNavItem>
                )}
              </React.Fragment>
            )}
          </MDBNavbarNav>
        </MDBNavbar>
        <div style={{ height: 60 }} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth, balance }) => ({
  isLoggedIn: auth.isLoggedIn,
  user: auth.user,
  balance
});

const mapDispatchToProps = dispatch => ({
  toggleLoginForm: bindActionCreators(toggleLoginForm, dispatch),
  toggleBalanceForm: bindActionCreators(toggleBalanceForm, dispatch),
  logout: bindActionCreators(logout, dispatch)
});

const styles = {
  root: {
    '& .logo-wrapper': {
      borderBottom: 'none'
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(injectSheet(styles)(Navigator)));
