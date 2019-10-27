import React from 'react';

import Intro from './components/Intro';
import Schedule from './components/Schedule';
import './styles.css';

function HomePage(props) {
  return (
    <React.Fragment>
      <div className='sepBlock'>
        <Intro />
      </div>
      <div className='sepBlock'>
        <Schedule  />
      </div>
    </React.Fragment>
  );
}

HomePage.propTypes = {};

export default HomePage;
