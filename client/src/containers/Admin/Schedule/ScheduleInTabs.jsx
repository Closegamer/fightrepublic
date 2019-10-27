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
import '../styles.css';

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
      <div>
        <MDBNav tabs className='nav-justified' color='black'>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '1'}
              onClick={this.toggleJustified('1')}
              role='tab'
            >
              <MDBIcon icon='pencil-alt' /> Понедельник
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '2'}
              onClick={this.toggleJustified('2')}
              role='tab'
            >
              <MDBIcon icon='pencil-alt' /> Вторник
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '3'}
              onClick={this.toggleJustified('3')}
              role='tab'
            >
              <MDBIcon icon='pencil-alt' /> Среда
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '4'}
              onClick={this.toggleJustified('4')}
              role='tab'
            >
              <MDBIcon icon='pencil-alt' /> Четверг
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '5'}
              onClick={this.toggleJustified('5')}
              role='tab'
            >
              <MDBIcon icon='pencil-alt' /> Пятница
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '6'}
              onClick={this.toggleJustified('6')}
              role='tab'
            >
              <MDBIcon icon='pencil-alt' /> Суббота
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to='#'
              active={this.state.activeItemJustified === '7'}
              onClick={this.toggleJustified('7')}
              role='tab'
            >
              <MDBIcon icon='pencil-alt' /> Воскресенье
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent
          className='card'
          activeItem={this.state.activeItemJustified}
        >
          <MDBTabPane tabId='1' role='tabpanel'>
            <h5 className='mt-30'>Понедельник</h5>
            <DayTab day={'monday'} />
          </MDBTabPane>
          <MDBTabPane tabId='2' role='tabpanel'>
          <h5 className='mt-30'>Вторник</h5>
            <DayTab day={'tuesday'} />
          </MDBTabPane>
          <MDBTabPane tabId='3' role='tabpanel'>
            <h5 className='mt-30'>Среда</h5>
            <DayTab day={'wednesday'} />
          </MDBTabPane>
          <MDBTabPane tabId='4' role='tabpanel'>
            <h5 className='mt-30'>Четверг</h5>
            <DayTab day={'thursday'} />
          </MDBTabPane>
          <MDBTabPane tabId='5' role='tabpanel'>
            <h5 className='mt-30'>Пятница</h5>
            <DayTab day={'friday'} />
          </MDBTabPane>
          <MDBTabPane tabId='6' role='tabpanel'>
            <h5 className='mt-30'>Суббота</h5>
            <DayTab day={'saturday'} />
          </MDBTabPane>
          <MDBTabPane tabId='7' role='tabpanel'>
            <h5 className='mt-30'>Воскресенье</h5>
            <DayTab day={'sunday'} />
          </MDBTabPane>
        </MDBTabContent>
      </div>
    );
  }
}

export default TabsJustified;
