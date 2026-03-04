import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
function LazyImage({ src, alt, placeholder, className }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef(null);
  console.log(useLocation, "useLocation");
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          // 判断当前图片是否进入视口
          const entry = entries[0];
          console.log("没进来了", entry);

          if (entry.isIntersecting) {
            console.log("进来了", entry);
            setIsIntersecting(true);
            observer.disconnect(); // 一旦图片进入视口，停止观察
          }
        },
        {
          threshold: 0.1, // 视口至少有10%可见时触发
        }
      );
      const currentImage = imgRef.current;

      if (currentImage) {
        observer.observe(currentImage); // 开始观察图片元素
      }
      clearTimeout(timer);
    }, 10);

    // 清理观察器
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isIntersecting ? src : placeholder} // 使用占位图直到图片进入视口
      alt={alt}
      className={className}
    />
  );
}

export default LazyImage;
