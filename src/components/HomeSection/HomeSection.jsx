import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./HomeSection.module.css";
import pdf from "../../assets/fes.jpg";

const HomeSection = () => {
  return (
    <Container className={styles.wrapper}>
      <Row className={`${styles.greeting} `}>
        <Col>
          <h1>
            Hi! <br /> I am Yevhenii
          </h1>
          <h2>React, Angular 2+, Node.js Expert</h2>
          <Button variant="outline-secondary">
            <a
              className="text-decoration-none link-secondary"
              download="CV"
              href={pdf}
            >
              Download CV <i className="bi bi-box-arrow-in-down"></i>
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeSection;
