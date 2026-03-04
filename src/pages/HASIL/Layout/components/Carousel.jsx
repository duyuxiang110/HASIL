import React from "react";
import "./index.less";

const Carousel = ({ items, onCarouselItemClick, activeIndex }) => {
  return (
    <div className="carousel">
      {items?.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          onClick={() => onCarouselItemClick(index)}
        >
          <span>{index + 1}</span>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
