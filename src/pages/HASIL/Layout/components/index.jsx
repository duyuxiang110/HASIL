import React, { useState } from "react";
import HeroSection from "./HeroSection";
import "./index.less";
import { images } from "../../../../utiters/bgConfig";
import OptimizedImage from "../../../../components/OptimizedImage";

function Index({ t, i18n }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCarouselClick = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  // };

  return (
    <div className="componentIndex">
      <HeroSection
        backgroundImage={images[currentIndex].image}
        title={images[currentIndex].title}
        subtitle={images[currentIndex].subtitle}
        animation="slide-in"
        nextSlide={nextSlide}
        t={t}
        i18n={i18n}
      >
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => handleCarouselClick(index)}
            >
              <OptimizedImage
                lowResSrc={image.minImage} // 压缩图片路径
                highResSrc={image.image} // 高清图片路径
                alt={`Background ${index}`}
              />
            </div>
          ))}
        </div>
      </HeroSection>

      {/* <div className="carousel-controls">
        <button onClick={prevSlide}>&lt; Prev</button>
        <button onClick={nextSlide}>Next &gt;</button>
      </div> */}
    </div>
  );
}

export default Index;
