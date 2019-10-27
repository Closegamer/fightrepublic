import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import '../../styles.css';
import pic1 from '../../../../img/masters/Egorov/index.jpeg';

function Master6Info(props) {
  return (
    <React.Fragment>
      <MDBContainer className='main-container' fluid>
        <MDBRow>
          <MDBCol xl='12' xs='12' className='contentArea-container'>
            <MDBRow>
                <MDBCol xs='12'>
                <h5>Егоров Владимир</h5>
                <br />
                <h6>тренер по боксу</h6>
                <br />
              </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol xs='12' sm='6'>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Мастер спорта по боксу;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Призер чемпионата России 2004 г. (3-е место);
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Победитель международного турнира Быстрова 2005 г.;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Победитель Международного турнира Чудинова 2006 г.;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Победитель всероссийского турнира класса «А» Ямадаева 2007, 2008 гг.;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Сертифицированный тренер школы бокса Кости Цзю (с 2008 по 2011 работал в зале Кости Цзю);
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Готовил к боям Джабара Аскерова.
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

Master6Info.propTypes = {};

export default Master6Info;
