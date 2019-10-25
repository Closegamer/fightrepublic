import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import '../../styles.css';
import pic1 from '../../../../img/masters/Eslemesov/image4.jpeg';

function Master4Info(props) {
  return (
    <React.Fragment>
      <MDBContainer className='main-container' fluid>
        <MDBRow>
          <MDBCol xl='12' xs='12' className='contentArea-container'>
            <MDBRow>
              <MDBCol size={12}>
                <h5>Арслан Еслемесов</h5>
                <br />
                <h6>тренер по ММА и действующий борец</h6>
                <br />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size={6}>
                {/* <p>Понедельник, среда, пятница с 18:00 до 19:30</p> */}
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Мастер
                  спорта международного класса по комплексному единоборству;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Мастер
                  спорта по служебному единоборству;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Победитель
                  всероссийских и международных турниров по ММА и по Грэпплингу;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Проф рекорд
                  в ММА 9 побед и 2 поражения;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Обладатель
                  пояса организации Blood&Sweet по грепплингу.
                </p>
              </MDBCol>
              <MDBCol size={6}>
                <img src={pic1} className='masterBigPic' />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

Master4Info.propTypes = {};

export default Master4Info;
