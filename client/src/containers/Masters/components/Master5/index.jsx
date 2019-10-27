import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import '../../styles.css';
import pic1 from '../../../../img/masters/Kodin/index.jpeg';

function Master5Info(props) {
  return (
    <React.Fragment>
      <MDBContainer className='main-container' fluid>
        <MDBRow>
          <MDBCol xl='12' xs='12' className='contentArea-container'>
            <MDBRow>
                <MDBCol xs='12'>
                <h5>Виталий Кодин</h5>
                <br />
                <h6>тренер по кикбоксингу и тайскому боксу</h6>
                <br />
              </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol xs='12' sm='6'>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Мастер спорта международного класса;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> 10-кратный чемпион Украины;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> чемпион кубка мира 2010;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Призер кубка мира 2009-2011;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион мира 2013-2014г (Тайлайнд , Бангкок - Патая);
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион Европы 2013 (Харьков,Украина), -Чемпион Украины по К-1 2010;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Сертификаты рефери международной категории, тренер международной категории С.
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

Master5Info.propTypes = {};

export default Master5Info;
