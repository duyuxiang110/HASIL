import React, { useRef, useState, useEffect } from "react";
import { Flex } from "antd";
import "./index.less";
import { MailOutlined, MenuOutlined } from "@ant-design/icons";
import Content from "./components/index";
import GraphicContent from "./components/graphicContent";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false); // 初始状态为不可见
  const [hover, setHover] = useState(false);
  const menuRef = useRef(null);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const rect = menuRef.current.getBoundingClientRect();
        if (rect.bottom < 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="layout">
      <Content t={t} i18n={i18n} />
      <Flex vertical={false}>
        <div ref={menuRef}></div>
        <div className={`fix ${isVisible ? "fade-in" : "hidden"}`}>
          <div className="menuOutlined">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <div
                  className="menuContent"
                  style={{
                    pointerEvents: hover ? "auto" : "none",
                  }}
                >
                  <div className="linkName">
                    <div onClick={() => navigate("/whyChooseUs")}>
                      {t("whyChooseUs")}
                    </div>
                  </div>
                  <div className="linkName">
                    <div onClick={() => navigate("/aboutUs")}>{t("about")}</div>
                  </div>
                  <div className="linkName">
                    <div onClick={() => navigate("/contactUs")}>
                      {t("contactUs")}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="menuIcon"
                  style={{
                    pointerEvents: hover ? "none" : "auto",
                  }}
                >
                  <MenuOutlined />
                </div>
              )}
            </div>
          </div>
        </div>
      </Flex>

      <div style={{ padding: "5vw 5vw 0 5vw" }}>
        <h1 className="h1_3">
          <span style={{ position: "relative" }}>
            <div className="l-shape"></div>
            {t("service")}
          </span>
        </h1>
        {/* 滚动内容 */}
        <GraphicContent t={t} />
      </div>

      <div className="footer">
        <div>
          <MailOutlined />
          <span>hasil@hasil-engineering.com</span>
          <div>
            <a
              style={{ color: "#707070" }}
              target="_blank"
              href="https://beian.miit.gov.cn"
            >
              浙ICP备2025155023号-1
            </a>
          </div>
        </div>
        {/* <div>
          <EnvironmentOutlined />
          <span>中国浙江省杭州市萧山区万象世界T2-905</span>
        </div> */}
      </div>
    </div>
  );
};

export default Index;
