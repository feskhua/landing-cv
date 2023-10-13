import { Col, Container, Row, Stack } from "react-bootstrap";
import styles from "./AboutSection.module.css";
import Fade from "react-reveal/Fade";
import fullStackSvg from "../../assets/full-stack.svg";
import problemSolvingSvg from "../../assets/problem-solving.svg";
import collaboratSpiritSvg from "../../assets/collaboration.svg";
import TechnologyEnthusiastSvg from "../../assets/tech.svg";

const AboutSection = () => {
  return (
    <Stack className="wrapper_section" id="About">
      <div className={styles.about_desc}>
        <span className="heding_meta">About</span>
        <h2 className="heading_description">WHO AM I?</h2>
        <p>
          <strong> I'm Yev</strong>, a passionate soul that for over 7 years has
          embarked on an incredible journey as a full-stack engineer.
        </p>
        <p>
          An agile mindset, a collaborative spirit, and a knack for solving
          complex problems are the things that drive me. I believe that every
          hurdle is an opportunity to learn and grow.
        </p>
        <p>
          I invite you to connect with me professionally, and together, we can
          continue to innovate and make a difference in the world of tech.
        </p>
      </div>
      <Container>
        <Row className={styles.animate_wrapper}>
          <Col lg={3}>
            <Fade left>
              <div
                className={`${styles.animate_box} animate_wrapper`}
                style={{ borderColor: "#2c98f0" }}
              >
                <img alt="full-stack" src={fullStackSvg} />
                <h3>Full-Stack Expert</h3>
              </div>
            </Fade>
          </Col>
          <Col lg={3}>
            <Fade right>
              <div
                className={`${styles.animate_box} animate_wrapper`}
                style={{ borderColor: "#2fa599" }}
              >
                <img alt="problem-solver" src={problemSolvingSvg} />
                <h3>Problem Solver</h3>
              </div>
            </Fade>
          </Col>
          <Col lg={3}>
            <Fade bottom>
              <div
                className={`${styles.animate_box} animate_wrapper`}
                style={{ borderColor: "#a84cb7" }}
              >
                <img alt="сollaborative-pirit" src={collaboratSpiritSvg} />
                <h3>Collaborative Spirit</h3>
              </div>
            </Fade>
          </Col>
          <Col md={3}>
            <Fade bottom>
              <div
                className={`${styles.animate_box} animate_wrapper`}
                style={{ borderColor: "#ec5453" }}
              >
                <img alt="еechnology-nthusiast" src={TechnologyEnthusiastSvg} />
                <h3>Technology Enthusiast</h3>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default AboutSection;
