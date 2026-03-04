// import "./index.less";
// import logoRed from "../../../assets/LOGO-red.png";
// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
// import contact from "../../../assets/building-5323266_1280.jpg";

// export default function Index() {
//   const { t } = useTranslation();
//   const navigate = useNavigate();

//   return (
//     <div className="contactUs">
//       <div className="logo">
//         <img src={logoRed} alt="logo" onClick={() => navigate("/")} />
//       </div>
//       <div className="title">{t("contactUs")}</div>

//       <div
//         style={{
//           display: "flex",
//           marginTop: "5vw",
//           alignItems: "center",
//         }}
//       >
//         <div style={{ width: "55vw" }}>
//           <img style={{ width: "100%" }} src={contact} alt="" />
//         </div>

//         <div
//           style={{
//             width: "45vw",
//             display: "flex",
//             alignItems: "center",
//             padding: "0 0 0 5vw",
//           }}
//         >
//           <div className="email">{t("email")}: </div>
//           <div className="emailPath">hasil@hasil-engineering.com</div>
//         </div>
//       </div>
//     </div>
//   );
// }
import "./index.less";
import logoRed from "../../../assets/LOGO-red.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DeWatermark5 from "../../../assets/DeWatermark5.png";

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
          <img src={DeWatermark5} alt="" />
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
