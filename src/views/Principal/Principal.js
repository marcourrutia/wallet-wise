import { useNavigate } from "react-router-dom";
import {
  backgroundHomeVideo,
  imgFullStack,
  imgSectionRight,
  imgSupport,
  imgVision,
  imgWebDevelopment,
  misionLeftImg,
  visionLogo,
} from "../../assets";
import { NavOption } from "../../components";
import "./Principal.css";
import { BsLinkedin } from "react-icons/bs";

export const Principal = () => {
  const navigate = useNavigate();

  return (
    <div className="principal-container">
      <NavOption />
      <div className="background-video">
        <video autoPlay muted loop src={backgroundHomeVideo}></video>
      </div>
      <section className="main-text">
        <p className="main-title">Manage your finances wisely</p>
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
      <section className="main-mision" id="services">
        <div className="main-services">
          <h1>Our Services</h1>
          <div className="services-container">
            <div>
              <h3>Custom Web Development</h3>
              <div className="services-img">
                <img src={imgWebDevelopment}></img>
              </div>
              <p>
                We design and build tailored web applications from the ground
                up, ensuring they meet your specific needs and scale with your
                business. This includes front-end user interfaces and back-end
                architecture, all with a focus on performance and security.
              </p>
            </div>
            <div>
              <h3>Full Stack Solutions</h3>
              <div className="services-img">
                <img src={imgFullStack}></img>
              </div>
              <p>
                Our team is skilled in both front-end and back-end development,
                offering complete full stack solutions. From setting up servers,
                databases, and APIs to creating intuitive and responsive
                interfaces, we manage every layer of your application.
              </p>
            </div>
            <div>
              <h3>Maintenance & Support</h3>
              <div className="services-img">
                <img src={imgSupport}></img>
              </div>
              <p>
                Beyond development, we provide ongoing maintenance and technical
                support to keep your applications running smoothly. Whether it’s
                regular updates, security patches, or performance optimization,
                we ensure your app is always up-to-date.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="main-mision" id="contact">
        <div className="main-contact">
          <h1>Meet the Team</h1>
          <div className="contact-container">
            <a
              href="https://www.linkedin.com/in/maryanni-nathally-marziliano-sanchez-60516112a/ "
              target="_blank"
            >
              <BsLinkedin />
              <span>Maryanni Marziliano</span>
            </a>
            <a
              href="https://www.linkedin.com/in/marco-urrutia-438b42288/"
              target="_blank"
            >
              <BsLinkedin />
              <span>Marco Urrutia</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-luis-briceño-uranga-235181151/"
              target="_blank"
            >
              <BsLinkedin />
              <span>Pedro Briceño</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
