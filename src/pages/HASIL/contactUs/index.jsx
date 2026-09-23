import "./index.less";
import logoRed from "../../../assets/LOGO-red.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DeWatermark5 from "../../../assets/DeWatermark5.png";
import image8 from "../../../assets/8.jpg";

export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="contactUs">
      <div className="logo">
        <img src={logoRed} alt="logo" onClick={() => navigate("/")} />
      </div>

      <div className="content-wrapper">
        <div className="content">
          <img src={image8} alt="" />
        </div>
        <div className="overlay-text">
          <span className="contact-title">{t("hk_contactUs")}</span>
          <div className="email-container">
            <div className="email">{t("hk_email")}:</div>
            <div className="emailPath">hasil@hasil-engineering.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
