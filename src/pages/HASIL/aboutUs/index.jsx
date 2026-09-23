import "./index.less";
import logoRed from "../../../assets/LOGO-red.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import picture from "../../../assets/Picture1.png";
import image7 from "../../../assets/7.jpg";

export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="aboutUs">
      <div>
        <div className="logo">
          <img src={logoRed} alt="logo" onClick={() => navigate("/")} />
        </div>
        <div className="title">
          <span style={{ color: "#e30613" }}>{t("about")}</span>
        </div>
        <div
          style={{
            fontWeight: "bold",
            padding: "5vh",
            wordBreak: "break-all",
            fontSize: "1.4rem",
          }}
        >
          &nbsp;&nbsp;{t("aboutContent")}
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          height: "80vh",
          overflow: "hidden",
          paddingBottom: "5vh",
        }}
      >
        <img style={{ maxHeight: "100%" }} src={image7} alt="" />
      </div>
    </div>
  );
}
