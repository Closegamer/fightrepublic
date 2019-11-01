import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from 'mdbreact';
import clubPic1 from '../../../img/club/club1.jpeg';
import clubPic3 from '../../../img/club/club3.jpeg';
import clubPic4 from '../../../img/club/club4.jpeg';
import '../styles.css';

const BlogPage = () => {
  return (
    <div className='mt35'>
      <h2 className='h1-responsive font-weight-bold text-center my-5'>
        Тренируйся сегодня, чтобы завтра быть лучше!
      </h2>
      <MDBRow>
        <MDBCol lg='5'>
          <MDBView className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
            <img className='img-fluid' src={clubPic1} alt='' />
            <a href='/masters'>
              <MDBMask overlay='white-slight' />
            </a>
          </MDBView>
        </MDBCol>
        <MDBCol lg='7'>
          <h3 className='font-weight-bold mb-3 p-0'>
            <strong>Для тех, кто рвётся в мир профессиональных боёв!</strong>
          </h3>
          <p>
            Каждый профессиональный спортсмен начинал с нуля. На 90% мы строим
            себя сами, шаг за шагом двигаясь к цели. В нашем клубе единоборств
            Fight Republic вы сможете получить не только помощь физическую
            (тренера будут вести вас прямо к большому рингу, направлять,
            отрабатывать западающие моменты), но и моральную, мотивационную.
            Ведь часто именно в нашем зале вы сможете наблюдать за работой
            действующих борцов и боксеров. В их числе и некоторые из наших
            тренеров: Литошик Игорь, Еслемесов Арслан, Казанцев Станислав.
            Помимо них у нас тренируются Левин Артём, Кандратьев Иван, Шамиль
            Гасанбеков и другие. Но даже если наш тренер не является действующим
            спортсменом, то в его арсенале имеется звание мастера спорта
            международного уровня, а за спиной множество кубков, поясов и
            медалей.
          </p>
          <MDBBtn
            href='/masters'
            color='success'
            size='md'
            className='waves-light adminBtn'
          >
            Наши тренеры
          </MDBBtn>
          <MDBBtn
            href='/schedule-show'
            color='success'
            size='md'
            className='waves-light adminBtn'
          >
            Расписание
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <hr className='my-5' />
      <MDBRow>
        <MDBCol lg='5'>
          <MDBView className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
            <img className='img-fluid' src={clubPic3} alt='' />
            <a href='/masters'>
              <MDBMask overlay='white-slight' />
            </a>
          </MDBView>
        </MDBCol>
        <MDBCol lg='7'>
          <h3 className='font-weight-bold mb-3 p-0'>
            <strong>Для тех, кто занимается для себя</strong>
          </h3>
          <p>
            В нашем клубе Fight Republic имеется широкий выбор занятий: бокс,
            тайский бокс, кикбоксинг, ММА, BJJ, стретчинг, кроссфит. И на каждом
            направлении по несколько профессиональных тренеров с большим опытом
            преподавания. Вы сможете легко выбрать удобное время и подходящий
            коллектив для комфортных тренировок, доставляющих только пользу. А
            после полуторачасового занятия ещё отдохнуть в сауне и восстановить
            силы!
          </p>
          <MDBBtn
            href='/info'
            color='success'
            size='md'
            className='waves-light adminBtn'
          >
            Единоборства
          </MDBBtn>
          <MDBBtn
            href='/schedule-show'
            color='success'
            size='md'
            className='waves-light adminBtn'
          >
            Расписание
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <hr className='my-5' />
      <MDBRow>
        <MDBCol lg='5'>
          <MDBView className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
            <img className='img-fluid' src={clubPic4} alt='' />
            <a href='#!'>
              <MDBMask overlay='white-slight' />
            </a>
          </MDBView>
        </MDBCol>
        <MDBCol lg='7'>
          <h3 className='font-weight-bold mb-3 p-0'>
            <strong>Для ответственных родителей</strong>
          </h3>
          <p>
            Имеются детские секции по двум направлениям - бокс и тайский бокс, и
            туда ходят только истинные чемпионы. Занятия единоборствами помогают
            детям обрести уверенность в себе, способствуют лучшей концентрации
            внимания, развивают мышление. А навыки, полученные на тренировках,
            могут колоссально изменить будущее ребёнка. Это может быть и
            профессиональный спорт, и умение защитить себя, и просто хорошая
            фигура. Однозначно, дети скажут вам спасибо за то, что ранее отдали
            их именно в единоборства!
          </p>
          <MDBBtn
            href='/contacts'
            color='indigo'
            size='md'
            className='waves-light adminBtn'
          >
            Записать ребенка
          </MDBBtn>
          <MDBBtn
            href='/schedule-show'
            color='success'
            size='md'
            className='waves-light adminBtn'
          >
            Расписание
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default BlogPage;
