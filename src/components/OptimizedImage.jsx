import React, { useState } from "react";

const OptimizedImage = ({ className, lowResSrc, highResSrc, alt }) => {
  const [isHighResLoaded, setIsHighResLoaded] = useState(false); // 标记高清图片是否加载完成

  return (
    <img
      src={isHighResLoaded ? highResSrc : lowResSrc}
      alt={alt}
      onLoad={() => {
        if (!isHighResLoaded && lowResSrc !== highResSrc) {
          // 只有在切换到高清图片后触发时更新状态
          setIsHighResLoaded(true);
        }
      }}
      className={className}
      style={{
        filter: isHighResLoaded ? "blur(0)" : "blur(4px)",
      }}
    />
  );
};

export default OptimizedImage;
