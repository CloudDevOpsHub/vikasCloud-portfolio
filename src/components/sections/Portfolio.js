import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Projects
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
  className="img-fluid"
  src="assets/portfolio/micro.jpg"
  alt="External Project"
  style={{
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    borderRadius: "12px", // optional, for rounded corners
    display: "block",
    objectFit: "contain", // ensures the whole image fits without cropping
}}
/>

          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>DevOps project-1</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Developing e-commerce application using microservice architecture</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Google</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 hour</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Tools :
                  </span>
                  <span>Github, jenkins, CI-CD, Docker, Kubernetes, AWS</span>
                </li>
              </ul>
            </div>
            <a href="https://github.com/GoogleCloudPlatform/microservices-demo" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
        <iframe
  className="youtube-video"
  src="https://www.youtube.com/embed/NhLA7xD3fwI"
  allowFullScreen
  style={{
    width: "100%",
    height: "400px", // You can adjust this to "300px", "500px", etc.
    border: "none",
    borderRadius: "12px", // Optional: for rounded corners
    display: "block",
    maxWidth: "100%",
    objectFit: "contain",
  }}
/>


            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>DevOps project-2</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Implementing CI-CD pipeline for Java Springboot<br></br> Application</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Google</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 hour</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Tools :
                  </span>
                  <span>Github, jenkins, CI-CD, Docker, Kubernetes, AWS</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
           <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
  className="img-fluid"
  src="assets/portfolio/awsservices.jpg"
  alt="External Project"
  style={{
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    borderRadius: "12px", // optional, for rounded corners
    display: "block",
    objectFit: "contain", // ensures the whole image fits without cropping
}}
/>

            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>DevOps project-3</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Provisioned and managed 40+ AWS resources <br></br>(EC2, VPC, ELB, Auto Scaling, RDS, etc.) using Terraform.</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>AWS</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 hour</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Tools :
                  </span>
                  <span>AWS, EC2, VPC, ELB, Autoscaling, RDS, EIP, Subnets</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
  className="img-fluid"
  src="assets/portfolio/devsecops2 (2).png"
  alt="External Project"
  style={{
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    borderRadius: "12px", // optional, for rounded corners
    display: "block",
    objectFit: "contain", // ensures the whole image fits without cropping
}}
/>

            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>DevOps project-4</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Deployment of Book My Show App using DevSecOps practices</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>AWS</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 hour</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Tools :
                  </span>
                  <span>Github, jenkins, Sonarqube, Trivy, CI-CD, Docker, Kubernetes, Prometheus, Grafana</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
