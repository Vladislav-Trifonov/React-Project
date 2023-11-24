import React, { useState } from 'react';

function Home ({ components }) {
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
        <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
          <Component />
        </div>
      ))}
      <button onClick={prevComponent}>&lt;</button>
      <button onClick={nextComponent}>&gt;</button>
    </div>
  );
};

export default Home;
