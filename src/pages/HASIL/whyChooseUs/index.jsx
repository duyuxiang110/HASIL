import "./index.less";
import logoRed from "../../../assets/LOGO-red.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import new_blockshow2_2x from "../../../assets/new_blockshow2_2x.jpg";
import china from "../../../assets/china_2x.jpg";
import DeWatermark_ from "../../../assets/DeWatermark_.png";
import DeWatermark_2 from "../../../assets/DeWatermark_2.png";
import image4 from "../../../assets/4.png";
import image1 from "../../../assets/1.jpg";
import image5 from "../../../assets/5.png";
import image6 from "../../../assets/6.jpg";

export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="whyChooseUs">
      <div className="logo">
        <img src={logoRed} alt="logo" onClick={() => navigate("/")} />
      </div>
      <div className="why-choose-us">
        <span style={{ color: "#e30613" }}>{t("whyChooseUs")}</span>
      </div>
      <div className="container">
        <div className="content-wrapper">
          <div className="image-section">
            <img src={image4} alt="Construction Image" />
          </div>
          <div className="text-section">
            <p className="title">
              <span style={{ color: "#e30613" }}>
                {t("whyChooseUs_title_1")}
              </span>

              <div className="l-shape"></div>
            </p>
            <p style={{ wordBreak: "break-all" }}>
              &nbsp;&nbsp;{t("whyChooseUs_content_1")}
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content-wrapper">
          <div className="text-section">
            <p className="title">
              <span style={{ color: "#e30613" }}>
                {t("whyChooseUs_title_2")}
              </span>
              <div className="l-shape"></div>
            </p>
            <p style={{ wordBreak: "break-all" }}>
              &nbsp;&nbsp;{t("whyChooseUs_content_2")}
            </p>
          </div>
          <div className="image-section2">
            <img src={image1} alt="Construction Image" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content-wrapper">
          <div className="text-section">
            <p className="title">
              <span style={{ color: "#e30613" }}>
                {t("whyChooseUs_title_4")}
              </span>
              <div className="l-shape"></div>
            </p>
            <p style={{ wordBreak: "break-all" }}>
              &nbsp;&nbsp;{t("whyChooseUs_content_4")}
            </p>
          </div>
          <div className="image-section2">
            <img src={image5} alt="Construction Image" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content-wrapper">
          <div className="image-section">
            <img src={image6} alt="Construction Image" />
          </div>
          <div className="text-section">
            <p className="title">
              <span style={{ color: "#e30613" }}>
                {t("whyChooseUs_title_3")}
              </span>
              <div className="l-shape"></div>
            </p>
            <p style={{ wordBreak: "break-all" }}>
              &nbsp;&nbsp;{t("whyChooseUs_content_3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
