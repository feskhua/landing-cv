import { Col, Container, Row, Stack } from "react-bootstrap";
import styles from "./EducationSection.module.css";

const EducationSection = () => {
  return (
    <Stack className="wrapper_section" id="Education">
      <Container>
        <span className="heding_meta ">Education</span>
        <Row>
          <Col md={6}>
            <h2 className="heading_description">Education</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row><Col className={styles.heading}>MASTER DEGREE IN COMPUTER SCIENCE</Col></Row>
        <Row><Col className={styles.content}>2014 - 2020 I was studying Computer Science at Kharkiv National Polytechnic University</Col></Row>
      </Container>
    </Stack>
  );
};

export default EducationSection;
