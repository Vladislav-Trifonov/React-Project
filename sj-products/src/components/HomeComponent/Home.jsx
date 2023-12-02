import "./home-component.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from "react";

function Home({ components }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextComponent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevComponent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {components.map((Component, index) => (
        <div key={index} className={index === currentIndex ? "visible" : "hidden"}>
          <Component />
        </div>
      ))}
      <div className="carousel-btns">
        <button onClick={prevComponent} className="change-button"><FontAwesomeIcon icon={faAngleLeft} className="font-awesome-icon"/></button>
        <button onClick={nextComponent} className="change-button"><FontAwesomeIcon icon={faAngleRight} className="font-awesome-icon"/></button>
      </div>
    </div>
  );
}

export default Home;
