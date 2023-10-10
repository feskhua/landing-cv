import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import styles from "./WorkSection.module.css";
import Bluejay from "../../assets/Bluejay.png";

const WorkSection = () => {
  return (
    <Stack className="wrapper_section" id="Work">
      <Container>
        <span className="heding_meta ">My Work</span>
        <Row>
          <Col md={6}>
            <h2 className="heading_description">Recent Work</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className={styles.project}>
            {/* <Image src={Bluejay} fluid /> */}
              <Row className={styles.desc}>
                <Col md={6}>
                  <h3>BlueJayRental</h3>
                  <p>
                    It is a progressive web application created to connect
                    property owners and real estate agents of Seattle WA.
                  </p>
                  <h5>Stack</h5>
                  <p>
                    {`
                    NodeJS (Express), React, MySQL, AWS: S3, RDS Integration:
                    Auth0, Heroku, Nelify, Stripe, Google maps`}
                  </p>
                  <h5>Outcome</h5>
                  <p>
                    To sum up, I'd like to tell that Blue-Jay Rental is a big
                    project that I created from scratch, it is a big
                    custom-built progressive web application with a number of
                    unique features which appeared as an idea and were
                    successfully implemented using a top-notch technology stack.
                  </p>
                </Col>
                <Col md={6}>
                  <h5> My role</h5>
                  <p>
                    I was hired as a back-end developer and created the project
                    from scratch. I completed a number of tasks and assignments.
                    Here are the most significant ones:
                  </p>
                  <ul>
                    <li>Created the code architecture;</li>
                    <li>Created DB's structure, set it up;</li>
                    <li>Developed all needed functionality;</li>
                    <li>Added various tests: Unit, API, E2E;</li>
                    <li>Integrated Stripe for payment flow and security;</li>
                    <li style={{ listStyleType: "none" }}>And more…</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default WorkSection;
