import { Col, Container, ProgressBar, Row, Stack } from "react-bootstrap";
import styles from "./SkillsSection.module.css";
import { Fade } from "react-reveal";
import { forwardRef } from "react";

const SkillsSection = forwardRef((_, ref) => {
  return (
    <Stack className="wrapper_section" id="Skills" ref={ref}>
      <Container>
        <span className="heding_meta ">My Specialty</span>
        <Row>
          <Col md={6}>
            <h2 className="heading_description">My Skills</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Fade left cascade>
                <div>
                  <Col>
                    <div className={styles.progress_wrap}>
                      <h3>React</h3>
                      <ProgressBar className="color-1" now={90} />
                      <span className="color-1">90%</span>
                    </div>
                  </Col>
                  <Col>
                    <div className={styles.progress_wrap}>
                      <h3>Angular</h3>
                      <ProgressBar className="color-3" now={85} />
                      <span className="color-3">85%</span>
                    </div>
                  </Col>
                  <Col>
                    <div className={styles.progress_wrap}>
                      <h3>Nest.js</h3>
                      <ProgressBar className="color-5" now={90} />
                      <span className="color-5">90%</span>
                    </div>
                  </Col>
                  <Col>
                    <div className={styles.progress_wrap}>
                      <h3>TypeScript</h3>
                      <ProgressBar className="color-7" now={95} />
                      <span className="color-7">95%</span>
                    </div>
                  </Col>
                </div>
              </Fade>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Fade right cascade>
                <div>
                  <Col>
                    <div className={styles.progress_wrap}>
                      <h3>Express</h3>
                      <ProgressBar className="color-2" now={90} />
                      <span className="color-2">90%</span>
                    </div>
                  </Col>
                  <Col>
                    <div className={styles.progress_wrap}>
                      <h3>Django</h3>
                      <ProgressBar className="color-4" now={80} />
                      <span className="color-4">80%</span>
                    </div>
                  </Col>
                  <Col>
                    <div className={styles.progress_wrap}>
                      <h3>MongoDB</h3>
                      <ProgressBar className="color-6" now={90} />
                      <span className="color-6">90%</span>
                    </div>
                  </Col>
                  <Col>
                    <div className={styles.progress_wrap}>
                      <h3>PostgreSQL</h3>
                      <ProgressBar className="color-8" now={90} />
                      <span className="color-8">90%</span>
                    </div>
                  </Col>
                </div>
              </Fade>
            </Row>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
});

export default SkillsSection;
