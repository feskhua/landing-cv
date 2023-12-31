import { Col, Container, Row, Stack } from "react-bootstrap";
import styles from "./ContactSection.module.css";
import emailSvg from "../../assets/email.svg";
import linkedinSvg from "../../assets/linkedin.svg";
import { forwardRef } from "react";

const EMAIL = "fes.khua@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/yevhenii-fesenko-seniorengineer/";

const ContactSection = forwardRef((_, ref) => {
  return (
    <Stack className="wrapper_section" id="Contact" ref={ref}>
      <Container>
        <span className="heding_meta ">Get in Touch</span>
        <Row>
          <Col md={6}>
            <h2 className="heading_description">Contact</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="pb-5">
          <Col lg={6}>
            <Stack
              className={`${styles.contact} align-content-center mb-3`}
              direction="horizontal"
              gap={3}
            >
              <div className={styles.colorlib_icon}>
                <img alt="email" src={emailSvg} />
              </div>
              <a href={`mailto: ${EMAIL}`}>{EMAIL}</a>
            </Stack>
          </Col>
          <Col lg={6}>
            <Stack
              className={`${styles.contact} align-content-center mb-4`}
              direction="horizontal"
              gap={3}
            >
              <div className={styles.colorlib_icon} style={{ width: "100px" }}>
                <img alt="linkedinSvg" src={linkedinSvg} />
              </div>
              <a
                href={LINKEDIN}
                style={{ wordBreak: "break-word" }}
                rel="noreferrer"
                target="_blank"
              >
                Linkedin
              </a>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
});

export default ContactSection;
