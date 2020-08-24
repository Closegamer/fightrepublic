import React from "react";
import GreetingBlock from "./components/GreetingBlock";
import Schedule from "./components/Schedule";
import MastersUniversal from "../../containers/MastersUniversal";
import Price from "../../containers/Price";
import Contacts from "../../containers/Contacts";
import "./styles.css";

function HomePage(props) {
  return (
    <React.Fragment>
      <div className="sepBlock">
        <GreetingBlock />
      </div>
      <div className="sepBlock">
        {/* <h2 className='h1-responsive font-weight-bold text-center my-5'>
          Расписание
        </h2>
        <Schedule /> */}
      </div>
      {/* <div className='sepBlock'>
        <MastersUniversal />
      </div> */}
      {/* <div className='sepBlock'>
        <Price />
      </div> */}
      <div className="sepBlock">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Контакты
        </h2>
        <Contacts />
      </div>
    </React.Fragment>
  );
}

HomePage.propTypes = {};

export default HomePage;
