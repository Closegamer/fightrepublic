import React from 'react';
import Sports from './components/sports';
import './styles.css';

function InfoPage(props) {
  return (
    <React.Fragment>
      <Sports />
    </React.Fragment>
  );
}

InfoPage.propTypes = {};

export default InfoPage;
