import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import '../../styles.css';
import pic1 from '../../../../img/masters/Litoshik/image2.png';

function Master3Info(props) {
  return (
    <React.Fragment>
      <MDBContainer className='main-container' fluid>
        <MDBRow>
          <MDBCol xl='12' xs='12' className='contentArea-container'>
            <MDBRow>
              <MDBCol size={12}>
                <h5>Игорь Литошик</h5>
                <br />
                <h6>тренер по ММА и действующий борец</h6>
                <br />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size={6}>
                {/* <p>Понедельник, среда, пятница с 18:00 до 19:30</p> */}
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Серебряный
                  призёр чемпионата беларуси по грепплингу чемпион турнира adcc
                  Minsk open;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Мастер
                  спорта по греко римской борьбе;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Мастер
                  спорта по ММА;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион
                  Беларуси по ММА;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион
                  гран при prime selection 22 боя по ММА 14 побед;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Трехкратным
                  чемпион пр грепплингу Турнир "Кровью и потом";{' '}
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Двукратный
                  чемпион турнира ОСЕ по смешанным единоборствам.
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

Master3Info.propTypes = {};

export default Master3Info;
