import { Col, Container, Row, Stack } from "react-bootstrap";
import styles from "./ServicesSection.module.css";
import { Fade } from "react-reveal";
import frontSvg from "../../assets/front.svg";
import backSvg from "../../assets/back.svg";
import dataBaseSvg from "../../assets/database.svg";
import cloudSvg from "../../assets/cloud.svg";
import mobileSvg from "../../assets/mobile-app.svg";
import agileSvg from "../../assets/agile.svg";
import { forwardRef } from "react";

const ServicesSection = forwardRef(function ServicesSection({ isMdSize }, ref) {
  return (
    <Stack className="wrapper_section" id="Services" ref={ref}>
      <Container>
        <span className="heding_meta ">What I do?</span>
        <Row>
          <Col md={6}>
            <h2 className="heading_description">
              Here are some of my expertise
            </h2>
          </Col>
        </Row>
      </Container>
      <Container>
        {isMdSize ? (
          <>
            <Row>
              <Col md={6} lg={4}>
                <Fade bottom>
                  <div
                    className={`animate_wrapper ${styles.animate}`}
                    style={{ borderColor: "#2c98f0" }}
                  >
                    <div className={`${styles.hexagon} ${styles.color_1}`}>
                      <img alt="front" src={frontSvg} />
                    </div>
                    <div className={`${styles.desc}`}>
                      <h3>Frontend</h3>
                      <p>
                        Building complex Frontend using React, Angular, and
                        related libraries and frameworks
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col md={6} lg={4}>
                <Fade bottom>
                  <div
                    className={`animate_wrapper ${styles.animate}`}
                    style={{ borderColor: "#ec5453" }}
                  >
                    <div className={`${styles.hexagon} ${styles.color_2}`}>
                      <img alt="back" src={backSvg} />
                    </div>
                    <div className={`${styles.desc}`}>
                      <h3>Backend</h3>
                      <p>
                        Creating advanced Backend systems using Express,
                        Nest.js, and related libraries and frameworks
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={4}>
                <Fade bottom>
                  <div
                    className={`animate_wrapper ${styles.animate}`}
                    style={{ borderColor: "#f9bf3f" }}
                  >
                    <div className={`${styles.hexagon} ${styles.color_3}`}>
                      <img alt="data-base" src={dataBaseSvg} />
                    </div>
                    <div className={`${styles.desc}`}>
                      <h3>Databases</h3>
                      <p>
                        Building and working with various databases such as
                        MongoDB, PostgreSQL, and MySQL
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>

              <Col md={6} lg={4}>
                <Fade bottom>
                  <div
                    className={`animate_wrapper ${styles.animate}`}
                    style={{ borderColor: "#a84cb8" }}
                  >
                    <div className={`${styles.hexagon} ${styles.color_4}`}>
                      <img alt="cloud" src={cloudSvg} />
                    </div>
                    <div className={`${styles.desc}`}>
                      <h3> Cloud Tech</h3>
                      <p>
                        Experince working with various AWS and GCP services to
                        implement and manage cloud infrastructure
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={4}>
                <Fade bottom>
                  <div
                    className={`animate_wrapper ${styles.animate}`}
                    style={{ borderColor: "#2fa499" }}
                  >
                    <div className={`${styles.hexagon} ${styles.color_5}`}>
                      <img alt="mobile" src={mobileSvg} />
                    </div>
                    <div className={`${styles.desc}`}>
                      <h3> Mobile</h3>
                      <p>
                        Working with Ionic and React Native to build
                        coprehencive hybrid mobile applications
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col md={6} lg={4}>
                <Fade bottom>
                  <div
                    className={`animate_wrapper ${styles.animate}`}
                    style={{ borderColor: "#4054b2" }}
                  >
                    <div className={`${styles.hexagon} ${styles.color_6}`}>
                      <img alt="agile" src={agileSvg} />
                    </div>
                    <div className={`${styles.desc}`}>
                      <h3>Methodology</h3>
                      <p>
                        Experience working with Agile, Scrum, and Kanban
                        methodologies
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col md={6} lg={4}>
                <Fade bottom>
                  <div
                    className={`animate_wrapper ${styles.animate}`}
                    style={{ borderColor: "#2c98f0" }}
                  >
                    <div className={`${styles.hexagon} ${styles.color_1}`}>
                      <img alt="front" src={frontSvg} />
                    </div>
                    <div className={`${styles.desc}`}>
                      <h3>Frontend</h3>
                      <p>
                        Building complex Frontend using React, Angular, and
                        related libraries and frameworks
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col md={6} lg={4}>
                <Fade bottom>
                  <div
                    className={`animate_wrapper ${styles.animate}`}
                    style={{ borderColor: "#ec5453" }}
                  >
                    <div className={`${styles.hexagon} ${styles.color_2}`}>
                      <img alt="back" src={backSvg} />
                    </div>
                    <div className={`${styles.desc}`}>
                      <h3>Backend</h3>
                      <p>
                        Creating advanced Backend systems using Express,
                        Nest.js, Django and related libraries and frameworks
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col md={6} lg={4}>
                <Fade bottom>
                  <div
                    className={`animate_wrapper ${styles.animate}`}
                    style={{ borderColor: "#f9bf3f" }}
                  >
                    <div className={`${styles.hexagon} ${styles.color_3}`}>
                      <img alt="data-base" src={dataBaseSvg} />
                    </div>
                    <div className={`${styles.desc}`}>
                      <h3>Databases</h3>
                      <p>
                        Building and working with various databases such as
                        MongoDB, PostgreSQL, and MySQL
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={4}>
                <Fade bottom>
                  <div
                    className={`animate_wrapper ${styles.animate}`}
                    style={{ borderColor: "#a84cb8" }}
                  >
                    <div className={`${styles.hexagon} ${styles.color_4}`}>
                      <img alt="cloud" src={cloudSvg} />
                    </div>
                    <div className={`${styles.desc}`}>
                      <h3> Cloud Tech</h3>
                      <p>
                        Experince working with various AWS and GCP services to
                        implement and manage cloud infrastructure
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col md={6} lg={4}>
                <Fade bottom>
                  <div
                    className={`animate_wrapper ${styles.animate}`}
                    style={{ borderColor: "#2fa499" }}
                  >
                    <div className={`${styles.hexagon} ${styles.color_5}`}>
                      <img alt="mobile" src={mobileSvg} />
                    </div>
                    <div className={`${styles.desc}`}>
                      <h3> Mobile</h3>
                      <p>
                        Working with Ionic and React Native to build
                        coprehencive hybrid mobile applications
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col md={6} lg={4}>
                <Fade bottom>
                  <div
                    className={`animate_wrapper ${styles.animate}`}
                    style={{ borderColor: "#4054b2" }}
                  >
                    <div className={`${styles.hexagon} ${styles.color_6}`}>
                      <img alt="agile" src={agileSvg} />
                    </div>
                    <div className={`${styles.desc}`}>
                      <h3>Methodology</h3>
                      <p>
                        Experience working with Agile, Scrum, and Kanban
                        methodologies
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Stack>
  );
});

export default ServicesSection;
