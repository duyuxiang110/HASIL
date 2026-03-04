import "./index.less";
import logoRed from "../../../assets/LOGO-red.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import new_blockshow2_2x from "../../../assets/new_blockshow2_2x.jpg";
import china from "../../../assets/china_2x.jpg";
import DeWatermark_ from "../../../assets/DeWatermark_.png";
import DeWatermark_2 from "../../../assets/DeWatermark_2.png";

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
            <img src={new_blockshow2_2x} alt="Construction Image" />
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
            <img src={china} alt="Construction Image" />
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
            <img src={DeWatermark_2} alt="Construction Image" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content-wrapper">
          <div className="image-section">
            <img src={DeWatermark_} alt="Construction Image" />
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
