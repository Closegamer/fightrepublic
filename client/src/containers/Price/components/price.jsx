import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import "../styles.css";

function PriceInfo(props) {
  return (
    <React.Fragment>
      <MDBContainer className="main-container" fluid>
        <MDBRow>
          <MDBCol xl="12" xs="12" className="contentArea-container ">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Цены
            </h2>
            <MDBRow>
              <MDBCol className="text-left">
                <ul className="noMarker">
                  <li>
                    <MDBIcon icon="certificate" className="redStar" />{" "}
                    Безлимитные клубные карты от 1 - 12 месяцев.
                  </li>
                  <li>
                    <MDBIcon icon="certificate" className="redStar" />{" "}
                    Безлимитные дневные карты с 7:00 - 17:00 на 6, 12 месяцев.
                  </li>
                  <li>
                    <MDBIcon icon="certificate" className="redStar" /> Клубная
                    карта "Студенческая".
                  </li>
                  <li>
                    <MDBIcon icon="certificate" className="redStar" /> Детские
                    клубные карты на 1 месяц (4, 8, 12 занятий).
                  </li>
                  <li>
                    <MDBIcon icon="certificate" className="redStar" /> Гостевой
                    визит.
                  </li>
                  <li>
                    <MDBIcon icon="certificate" className="redStar" /> Гостевой
                    визит детский.
                  </li>
                  <li>
                    <MDBIcon icon="certificate" className="redStar" /> Блок из
                    персональных тренировок.
                  </li>
                </ul>
                <br />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="text-left">
                <p>
                  ЦЕНЫ УТОЧНЯЙТЕ У МЕНЕДЖЕРОВ ПО ТЕЛЕФОНУ: +7 (495) 220-26-24
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

PriceInfo.propTypes = {};

export default PriceInfo;
