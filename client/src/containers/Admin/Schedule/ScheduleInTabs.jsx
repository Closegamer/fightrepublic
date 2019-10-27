import React, { Component } from 'react';
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from 'mdbreact';
import DayTab from './DayTab';

class TabsJustified extends Component {
  state = {
    activeItemJustified: '1'
  };

  toggleJustified = tab => e => {
    if (this.state.activeItemJustified !== tab) {
      this.setState({
        activeItemJustified: tab
      });
    }
  };

  render() {
    // const columns = ['Время', 'Ударная зона', 'Зона татами'];
    return (
      <MDBContainer>
        <MDBNav tabs className='nav-justified' color='indigo'>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '1'}
              onClick={this.toggleJustified('1')}
              role='tab'
            >
              <MDBIcon icon='user' /> Понедельник
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '2'}
              onClick={this.toggleJustified('2')}
              role='tab'
            >
              <MDBIcon icon='heart' /> Вторник
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '3'}
              onClick={this.toggleJustified('3')}
              role='tab'
            >
              <MDBIcon icon='envelope' /> Среда
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '4'}
              onClick={this.toggleJustified('4')}
              role='tab'
            >
              <MDBIcon icon='envelope' /> Четверг
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '5'}
              onClick={this.toggleJustified('5')}
              role='tab'
            >
              <MDBIcon icon='envelope' /> Пятница
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '6'}
              onClick={this.toggleJustified('6')}
              role='tab'
            >
              <MDBIcon icon='envelope' /> Суббота
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '7'}
              onClick={this.toggleJustified('7')}
              role='tab'
            >
              <MDBIcon icon='envelope' /> Воскресенье
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent
          className='card'
          activeItem={this.state.activeItemJustified}
        >
          <MDBTabPane tabId='1' role='tabpanel'>
            <DayTab day={'monday'} />
          </MDBTabPane>
          <MDBTabPane tabId='2' role='tabpanel'>
            <DayTab day={'tuesday'} />
          </MDBTabPane>
          <MDBTabPane tabId='3' role='tabpanel'>
            <DayTab day={'wednesday'} />
          </MDBTabPane>
          <MDBTabPane tabId='4' role='tabpanel'>
            <DayTab day={'thursday'} />
          </MDBTabPane>
          <MDBTabPane tabId='5' role='tabpanel'>
            <DayTab day={'friday'} />
          </MDBTabPane>
          <MDBTabPane tabId='6' role='tabpanel'>
            <DayTab day={'saturday'} />
          </MDBTabPane>
          <MDBTabPane tabId='7' role='tabpanel'>
            <DayTab day={'sunday'} />
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

export default TabsJustified;
