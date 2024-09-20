import { backgroundHomeVideo, imgSectionRight } from "../../assets";
import "./PrincipalMarco.css";

export const PrincipalMarco = () => {
  return (
    <div className="principal-container">
      <div class="background-video">
        <video autoPlay muted loop src={backgroundHomeVideo}></video>
      </div>
      <div className="main-text">
        <p className="main-title">Management your finances wisely</p>
        <p className="main-subtitle">
          Track, save, and grow your finances with ease
        </p>
      </div>
      <div className="main-mision">
        <div className="main-mision-section-left">
          <div className="mision-left-img"></div>
          <h1 className="mision-title">Our mision</h1>
          <p>
            Empowering people to take control of their financial well-being
            through simple, visual, and personalized tools that allow them to
            manage their income, control their expenses, and improve their
            financial health.
          </p>
        </div>
        <div className="main-mision-section-right">
          <img src={imgSectionRight} />
        </div>
      </div>
    </div>
  );
};
