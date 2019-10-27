import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import master1 from '../../img/masters/Rybalko/index.jpeg';
import master2 from '../../img/masters/Kazantsev/index.jpeg';
import master3 from '../../img/masters/Litoshik/index.jpeg';
import master4 from '../../img/masters/Eslemesov/index.jpeg';
import './styles.css';

function MastersPage(props) {
  return (
    <React.Fragment>
      <MDBContainer className='main-container' fluid>
        <MDBRow>
          <MDBCol xl='12' xs='12' className='contentArea-container'>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Наши тренеры
          </h2>
            <MDBRow>
              <MDBCol>
                <MDBRow>
                  <MDBCol size={3} className='text-center'>
                    <a href='/masters/Master1'>
                      <img src={master1} className='mastersBoard' />
                    </a>
                    <h2>Валентин Рыбалко</h2>
                  </MDBCol>
                  <MDBCol size={3} className='text-center gap'>
                    <a href='/masters/Master2'>
                      <img src={master2} className='mastersBoard' />
                    </a>
                    <h2>Станислав Казанцев</h2>
                  </MDBCol>
                  <MDBCol size={3} className='text-center'>
                    <a href='/masters/Master3'>
                      <img src={master3} className='mastersBoard' />
                    </a>
                    <h2>Игорь Литошик</h2>
                  </MDBCol>
                  <MDBCol size={3} className='text-center'>
                    <a href='/masters/Master4'>
                      <img src={master4} className='mastersBoard' />
                    </a>
                    <h2>Арслан Еслемесов</h2>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

MastersPage.propTypes = {};

export default MastersPage;
