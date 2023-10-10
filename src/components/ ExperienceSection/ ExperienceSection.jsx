import styles from "./ExperienceSection.module.css";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Fade } from "react-reveal";

const ExperienceSection = () => {
  return (
    <Stack className="wrapper_section" id="Experience">
      <Container>
        <span className="heding_meta ">Experience</span>
        <Row>
          <Col md={6}>
            <h2 className="heading_description">Work experience</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.timeline_centered}>
              <Fade cascade right>
                <div>
                  <article className={styles.timeline_entry}>
                    <div className={styles.timeline_entry_inner}>
                      <div
                        className={`${styles.timeline_icon} ${styles.color_1}`}
                      >
                        <i className="bi bi-pencil"></i>
                      </div>

                      <div className={styles.timeline_label}>
                        <h2>
                          <a href="#Home"> Back End Developer at SoftServe</a>
                          <span> 2016 - 2019</span>
                        </h2>
                        <p>
                          This company gave birth to my future career. The
                          senior developers patiently guided me through the
                          intricacies of front-end and back-end development. As
                          the days turned into weeks, I was entrusted with more
                          responsibilities. My tasks grew from minor bug fixes
                          to developing entire features for our web
                          applications.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className={styles.timeline_entry}>
                    <div className={styles.timeline_entry_inner}>
                      <div
                        className={`${styles.timeline_icon} ${styles.color_2}`}
                      >
                        <i className="bi bi-pencil"></i>
                      </div>
                      <div className={styles.timeline_label}>
                        <h2>
                          <a href="#Home">Full Stack Developer at MayeWorks</a>{" "}
                          <span>2019 - 2021</span>
                        </h2>
                        <p>
                          Joining this new company felt like the next logical
                          step in my career. It was a mid-sized tech firm known
                          for its commitment to innovation and its strong focus
                          on nurturing talent. The scale of projects was larger,
                          the complexity was higher, and it was both exciting
                          and challenging to adapt to this new environment.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className={styles.timeline_entry}>
                    <div className={styles.timeline_entry_inner}>
                      <div
                        className={`${styles.timeline_icon} ${styles.color_3}`}
                      >
                        <i className="bi bi-pencil"></i>
                      </div>
                      <div className={styles.timeline_label}>
                        <h2>
                          <a href="#Home">
                            Senior Full Stack Developer as Freelancer
                          </a>{" "}
                          <span>2021 - Now</span>
                        </h2>
                        <p>
                          With a sense of excitement and determination, I made
                          the decision to take the leap into freelancing. I
                          prepared myself by building a portfolio of my work and
                          networking with potential clients. It was a bold step,
                          but I was confident that my experiences and skills
                          would serve as a strong foundation for this new
                          chapter in my career. Freelancing offered the promise
                          of a different kind of adventure, where every project
                          was an opportunity to learn, grow, and define my path
                          in the tech world. It is what I am definitely fond of
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </Fade>
              <article className={styles.timeline_entry}>
                <div className={styles.timeline_entry_inner}>
                  <div
                    className={`${styles.timeline_icon} ${styles.color_none}`}
                  ></div>
                </div>
              </article>
            </div>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default ExperienceSection;
