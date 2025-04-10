// src/components/Slideshow.jsx
import React, { useState } from "react";
import "../styleComponents/slideshow.css";

const Slideshow = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1);
  };

  return (
    <div className="slideshow">
      {total > 1 && (
        <>
          <button className="prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="next" onClick={nextSlide}>
            ›
          </button>
          <span className="counter">{`${current + 1} / ${total}`}</span>
        </>
      )}
      <img
        src={pictures[current]}
        alt={`slide ${current + 1}`}
        className="slide-image"
      />
    </div>
  );
};

export default Slideshow;
