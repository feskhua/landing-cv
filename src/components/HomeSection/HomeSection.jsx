import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./HomeSection.module.css";
import cvPdf from "../../assets/cv.pdf";

const HomeSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.content} id="Home">
        <Row className={`${styles.greeting} `}>
          <Col xs={12} md={6}>
            <h1>
              Hi! <br /> I am Yevhenii
            </h1>
            <h2>React, Angular 2+, Node.js Expert</h2>
            <Button variant="outline-secondary">
              <a
                className="text-decoration-none link-secondary"
                download="CV"
                href={cvPdf}
              >
                Download CV <i className="bi bi-box-arrow-in-down"></i>
              </a>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeSection;
