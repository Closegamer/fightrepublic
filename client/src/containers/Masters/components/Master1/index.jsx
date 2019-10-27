import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import '../../styles.css';
import pic1 from '../../../../img/masters/Rybalko/image5.jpeg';

function Master1Info(props) {
  return (
    <React.Fragment>
      <MDBContainer className='main-container' fluid>
        <MDBRow>
          <MDBCol xl='12' xs='12' className='contentArea-container'>
            <MDBRow>
              <MDBCol xs='12'>
                <h5>Валентин Рыбалко</h5>
                <br />
                <h6>тренер по кикбоксингу</h6>
                <br />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol xs='12' sm='6'>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Мастер Спорта Международного класса по тайскому боксу;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион Европы среди профи Muay Thai W.M.F. PRO-AMAT. 2013;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион С.Н.Г среди профи Muay Thai I.M.T.A. 2008;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион Украины среди профи Muay Thai W.M.F PRO-AMAT. 2011;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион FFC FURNITURE 17 Kickboxing Horvatia 2014;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион K1 MAXIMUM Promotion 2018.
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Призёр Russian Challenge 5 Moscow. 2018
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион FFC FINAL CHAMPIONS 11 Slovenia. Lubljana. 2014;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Вице-Чемпион Чемпионата Мира 2011. W.M.F. Pro-Amat Thailand. Bangkok;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион Кубка Мира Hungary Seged 2014;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион Кубка Европы по K1. 2013 WAKO Kickboxing;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион Кубка Мира 2008. 2011. 2012 Ялта. Украина;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион Украины по Панкатиону. 2005;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион Украины и Кубка Украины по Ушу Саньда 2009;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион Украины по Muay Thai W.M.F 2008. 2012. 2013;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион Украины по K1 Kickboxing WAKO 2009.
                </p>
              </MDBCol>
              <MDBCol xs='12' sm='6'>
                <img src={pic1} className='img-fluid' />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

Master1Info.propTypes = {};

export default Master1Info;
