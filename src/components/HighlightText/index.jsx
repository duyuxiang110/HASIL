import React from "react";

const HighlightText = ({ text, keywords, highlightColor = "#e30613" }) => {
  // 处理关键词，构建正则表达式
  const regex = new RegExp(`(${keywords.join("|")})`, "gi");

  const processText = (str) => {
    return str.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ color: highlightColor }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return <>{processText(text)};</>;
};

export default HighlightText;
