import React from 'react';
import {
  MDBView,
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBAnimation
} from 'mdbreact';
// import classNames from 'classnames';
import injectSheet from 'react-jss';
import '../../Admin/styles.css';
import BookForm from './bookForm';
// import PionImg from '../../../img/intro.png';
// import PionBg from '../../../img/intro_bg.jpg';

const Intro = ({ classes }) => {
  return (
    <div>
      <MDBView className={classes.view}>
        <MDBMask className='d-flex justify-content-center align-items-center purple-gradient2'>
          <MDBContainer>
            <MDBRow>
              <div className='white-text text-center text-md-left col-md-6 mt-xl-5'>
                <MDBAnimation type='fadeInLeft'>
                  <BookForm />
                </MDBAnimation>
              </div>
              <MDBCol
                md='6'
                xl='5'
                className='mt-xl-5 col-8 offset-2 offset-md-0'
              >
                <MDBAnimation type='fadeInRight'>
                  <h3>Для тех, кто рвётся в мир профессиональных боёв!</h3>
                  <p>Каждый профессиональный спортсмен начинал с нуля.</p>
                  <p>
                    На 90% мы строим себя сами, шаг за шагом двигаясь к цели.
                  </p>
                  <p>
                    В нашем клубе единоборств Fight Republic вы сможете получить
                    не только помощь физическую (тренера будут вести вас прямо к
                    большому рингу, направлять, отрабатывать западающие
                    моменты), но и моральную, мотивационную.
                  </p>
                  <p>
                    Ведь часто именно в нашем зале вы сможете наблюдать за
                    работой действующих борцов и боксеров. В их числе и
                    некоторые из наших тренеров: Литошик Игорь, Еслемесов
                    Арслан, Казанцев Станислав.
                  </p>
                  <p>
                    Помимо них у нас тренируются Левин Артём, Кандратьев Иван,
                    Шамиль Гасанбеков и другие.
                  </p>
                  <p>
                    {' '}
                    Но даже если наш тренер не является действующим спортсменом,
                    то в его арсенале имеется звание мастера спорта
                    международного уровня, а за спиной множество кубков, поясов
                    и медалей.
                  </p>
                  {/* <img src={PionImg} alt='' className='img-fluid' /> */}
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    </div>
  );
};

const styles = {
  view: {
    // backgroundImage: `url('${PionBg}')`,
    //backgroundColor: 'red',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    height: 'calc(100vh - 60px)'
  },
  h6: {
    lineHeight: 1.6
  }
};

export default injectSheet(styles)(Intro);
