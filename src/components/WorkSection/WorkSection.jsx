import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import styles from "./WorkSection.module.css";
import Bluejay from "../../assets/Bluejay.png";
import Voguescope from "../../assets/Voguescope.png";
import Switfly from "../../assets/Swiftly.png";
import { forwardRef } from "react";

const WorkSection = forwardRef(function WorkSection(_, ref) {
  return (
    <Stack className="wrapper_section" id="Work" ref={ref}>
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
              <Image fluid src={Bluejay} />
              <hr />
              <Row className={styles.desc}>
                <Col lg={6}>
                  <h3  className="mt-2">BlueJayRental</h3>
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
                <Col lg={6}>
                  <h5 className="mt-2"> My role</h5>
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
        <Row>
          <Col>
            <div className={styles.project}>
              <Image fluid src={Voguescope} />
              <hr />
              <Row className={styles.desc}>
                <Col lg={6}>
                  <h3 className="mt-2">Voguescope</h3>
                  <p>
                    Comprehensive web platform - fashion aggregator website,
                    scraping product data from dozens of sites and placing them
                    on client’s site, along with search engine onboard.
                  </p>
                  <h5>Stack</h5>
                  <p>
                    React, Redux, Typescript, Nest.js, Next.js, Typeorm, MySQL,
                    ParseHub, Elasticsearch
                  </p>
                  <h5>Outcome</h5>
                  <p>
                    I’m happy to make my addition to this project development.
                    Due to my efforts, there is a search engine for pre-owned
                    designer bags, that the world lacked before.
                  </p>
                </Col>
                <Col lg={6}>
                  <h5> My role</h5>
                  <p>
                    I was hired as a full-stack developer for this project to
                    configure the new layout and search engine from scratch. I
                    did the following:
                  </p>
                  <ul>
                    <li>Set up a new backend and frontend app;</li>
                    <li>
                      Set up a new database with the scraper data provided by
                      the client;
                    </li>
                    <li>
                      Implemented the whole new UI screens; fetched them with
                      initial backend;
                    </li>
                    <li>
                      Investigated Elasticsearch functionality and implemented
                      it;
                    </li>
                    <li style={{ listStyleType: "none" }}>And more…</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.project}>
              <Image fluid src={Switfly} />
              <Row className={`${styles.desc} `}>
                <Col lg={6}>
                  <h3>Switfly</h3>
                  <p>
                    Switfly is a platform focused on providing big and small
                    businesses with insurance support, providing secure
                    web-based payment collection, settlement and documentation
                    services, as well as processing and reconciliations. It
                    includes various tools: performance graphs, complex forms
                    etc.
                  </p>
                  <h5>Stack</h5>
                  <p>React, Redux, Next.js, MSW, React-Query, Jest, Cypress</p>
                  <h5>Outcome</h5>
                  <p>
                    Working closely with the client, we achieved all goals in a
                    timely manner. Proud to be engaged in such a cool product
                    development.
                  </p>
                </Col>
                <Col lg={6}>
                  <h5> My role</h5>
                  <p>
                    I was hired as a front-end developer to build project from
                    scratch, based on existing POC writen on Angular. Here some
                    of tasks I completed:
                  </p>
                  <ul>
                    <li>
                      Implemented pages such as CAIP insurance report, business
                      quote, Policy details, etc;
                    </li>
                    <li>
                      Added Endorsements tab, Policy View tab, Policy payments
                      tab, Documents, and Notes sections;
                    </li>
                    <li>
                      Worked on a voice assistant prototype for the Quote
                      project's main questionnaire;
                    </li>
                    <li>
                      Keeping frontend up-to-date with the latest API changes;
                    </li>
                    <li>
                      Various adjustments and bug fixes to the existing
                      functionality;
                    </li>
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
});

export default WorkSection;
