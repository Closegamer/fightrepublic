import React from 'react';

import Intro from './components/Intro';
import Schedule from './components/Schedule';

function HomePage(props) {
  return (
    <React.Fragment>
      <Intro />
      <Schedule  />
    </React.Fragment>
  );
}

HomePage.propTypes = {};

export default HomePage;
