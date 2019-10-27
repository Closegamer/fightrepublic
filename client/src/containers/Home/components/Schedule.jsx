import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from
"mdbreact";
import DayTabShow from './DayTabShow.jsx';

class TabsJustified extends Component {
state = {
  activeItemJustified: "1"
}

toggleJustified = tab => e => {
  if (this.state.activeItemJustified !== tab) {
    this.setState({
      activeItemJustified: tab
    });
  }
};

render() {
    return (
      <MDBContainer>
        <MDBNav tabs className="nav-justified" color='black'>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItemJustified === "1"} onClick={this.toggleJustified("1")} role="tab" >
            <span className='d-none d-sm-block'><MDBIcon icon="clipboard-list" />Понедельник</span>
              <span className='d-block d-sm-none'>ПН</span>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItemJustified === "2"} onClick={this.toggleJustified("2")} role="tab" >
            <span className='d-none d-sm-block'><MDBIcon icon="clipboard-list" />Вторник</span>
              <span className='d-block d-sm-none'>ВТ</span>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItemJustified === "3"} onClick={this.toggleJustified("3")} role="tab" >
            <span className='d-none d-sm-block'><MDBIcon icon="clipboard-list" />Среда</span>
              <span className='d-block d-sm-none'>СР</span>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItemJustified === "4"} onClick={this.toggleJustified("4")} role="tab" >
            <span className='d-none d-sm-block'><MDBIcon icon="clipboard-list" />Четверг</span>
              <span className='d-block d-sm-none'>ЧТ</span>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItemJustified === "5"} onClick={this.toggleJustified("5")} role="tab" >
            <span className='d-none d-sm-block'><MDBIcon icon="clipboard-list" />Пятница</span>
              <span className='d-block d-sm-none'>ПТ</span>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItemJustified === "6"} onClick={this.toggleJustified("6")} role="tab" >
            <span className='d-none d-sm-block'><MDBIcon icon="clipboard-list" />Суббота</span>
              <span className='d-block d-sm-none'>СБ</span>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItemJustified === "7"} onClick={this.toggleJustified("7")} role="tab" >
            <span className='d-none d-sm-block'><MDBIcon icon="clipboard-list" />Воскресенье</span>
              <span className='d-block d-sm-none'>ВС</span>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent
          className="card"
          activeItem={this.state.activeItemJustified}
        >
          <MDBTabPane tabId="1" role="tabpanel">
            <h5>Понедельник</h5>
            <DayTabShow day={'monday'} />
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <h5>Вторник</h5>
            <DayTabShow day={'tuesday'} />
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <h5>Среда</h5>
            <DayTabShow day={'wednesday'} />
          </MDBTabPane>
          <MDBTabPane tabId="4" role="tabpanel">
            <h5>Четверг</h5>
            <DayTabShow day={'thursday'} />
          </MDBTabPane>
          <MDBTabPane tabId="5" role="tabpanel">
            <h5>Пятница</h5>
            <DayTabShow day={'friday'} />
          </MDBTabPane>
          <MDBTabPane tabId="6" role="tabpanel">
            <h5>Суббота</h5>
            <DayTabShow day={'saturday'} />
          </MDBTabPane>
          <MDBTabPane tabId="7" role="tabpanel">
            <h5>Воскресенье</h5>
            <DayTabShow day={'sunday'} />
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

export default TabsJustified;