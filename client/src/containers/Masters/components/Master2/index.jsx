import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import '../../styles.css';
import pic1 from '../../../../img/masters/Kazantsev/image4.jpeg';
function Master2Info(props) {
  return (
    <React.Fragment>
      <MDBContainer className='main-container' fluid>
        <MDBRow>
          <MDBCol xl='12' xs='12' className='contentArea-container'>
            <MDBRow>
              <MDBCol size={12}>
                <h5>Станислав Казанцев</h5>
                <br />
                <h6>
                  тренер по тайскому боксу (только персональные тренировки) и
                  действующий боксер
                </h6>
                <br />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size={6}>
                {/* <p>Понедельник, среда, пятница с 18:00 до 19:30</p> */}
                <p>
                  <MDBIcon icon='certificate' className='redStar' />{' '}
                  Профессиональный рекорд 25-4-1;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Кандидат в
                  мастера спорта по тайскому боксу ;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' /> Чемпион
                  Украины по тайскому боксу 2012;
                </p>
                <p>
                  <MDBIcon icon='certificate' className='redStar' />{' '}
                  Многократный призёр чемпионатов и кубков Украины по тайскому
                  боксу;
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

Master2Info.propTypes = {};

export default Master2Info;
