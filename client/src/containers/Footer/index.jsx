import React, { Component } from "react";
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
import logo1 from "../../img/Logotip_FR-05.png";
import logo2 from "../../img/Logotip_FR-06.png";

export class Footer extends Component {
  render() {
    return (
      <MDBContainer className="footer-container" fluid>
        <MDBRow>
          <MDBCol size={12}>
            logo1
            {/* <img
              src={logo1}
              className='img-fluid footerLogo1 float-right'
              alt='FR-logo1'
            /> */}
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size={12}>
            logo2
            {/* <img
              src={logo2}
              className='img-fluid footerLogo2 float-right'
              alt='FR-logo2'
            /> */}
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size={12}>
            <div className="footer-copyright">
              this.writtenByClosegamer(2020);
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Footer;
