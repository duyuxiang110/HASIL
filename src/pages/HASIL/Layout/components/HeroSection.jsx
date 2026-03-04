import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./HeroSection.less";
import { Space } from "antd";
import logoRed from "../../../../assets/LOGO-red.png";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ backgroundImage, children, nextSlide, t, i18n }) => {
  const [progress, setProgress] = useState(0);
  const [progressColor, setProgressColor] = useState("green");
  const [chineseEnglish, setChineseEnglish] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          onProgressComplete();
          return 0;
        }
        return prev + 100 / 100;
      });
      setProgressColor("red");
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(chineseEnglish ? "cn" : "en");
  }, [chineseEnglish]);

  const onProgressComplete = () => {
    nextSlide?.();
  };
  const animation = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 500 },
  });

  return (
    <div className="hero-section-container">
      <animated.div
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%), url(${backgroundImage})`,
          ...animation,
        }}
      >
        <div className="header">
          <div className="logo">
            <img src={logoRed} alt="logo" />
          </div>
          <Space className="toPath" style={{ marginLeft: "auto" }} size={30}>
            <div className="learn-more">
              <div
                onClick={() => navigate("/whyChooseUs")}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <button type="submit" className="custom-button">
                  {t("whyChooseUs")}
                  <svg
                    className="button-icon"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="icon-path"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="learn-more">
              <div
                onClick={() => navigate("/aboutUs")}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <button type="submit" className="custom-button">
                  {t("about")}
                  <svg
                    className="button-icon"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="icon-path"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="learn-more">
              <div
                onClick={() => navigate("/contactUs")}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <button type="submit" className="custom-button">
                  {t("contactUs")}
                  <svg
                    className="button-icon"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="icon-path"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="learn-more ChEn"
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => {
                setChineseEnglish(!chineseEnglish);
              }}
            >
              <div className={"ch"}>{chineseEnglish ? "中" : "En"}</div>
              <div className={"en"}>{chineseEnglish ? "En" : "中"}</div>
            </div>
          </Space>
        </div>

        <div className="hero-content">
          <div className="title">{t("one_introduction_1")}</div>
          <div className="title">{t("one_introduction_2")}</div>
        </div>
      </animated.div>
      <div
        className="heroSection-line"
        style={{
          height: "0.5vh",
          background: progressColor,
          width: `${progress}%`,
          transition: "width 0.1s ease-in-out",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: "2rem",
        }}
      ></div>
      {children}
    </div>
  );
};

export default HeroSection;
