import {
  backgroundHomeVideo,
  imgSectionRight,
  imgVision,
  misionLeftImg,
  visionLogo,
} from "../../assets";
import { NavOption } from "../../components";
import "./Principal.css";

export const Principal = () => {
  return (
    <div className="principal-container">
      <NavOption />
      <div className="background-video">
        <video autoPlay muted loop src={backgroundHomeVideo}></video>
      </div>
      <section className="main-text">
        <p className="main-title">Management your finances wisely</p>
        <p className="main-subtitle">
          Track, save, and grow your finances with ease
        </p>
      </section>
      <section className="main-mision" id="mision">
        <div className="main-mision-section-left">
          <div className="mision-left-img">
            <img src={misionLeftImg} />
          </div>
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
      </section>
      <section className="main-mision" id="vision">
        <div className="main-mision-section-right">
          <img src={imgVision} />
        </div>
        <div className="main-mision-section-left">
          <div className="mision-left-img">
            <img src={visionLogo} />
          </div>
          <h1 className="mision-title">Our vision</h1>
          <p>
            To become the leading personal financial management platform,
            helping millions of people achieve financial stability,make informed
            financial decisions, and create healthy habits that drive their
            long-term financial well-being.
          </p>
        </div>
      </section>
    </div>
  );
};
