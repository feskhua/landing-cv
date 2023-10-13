import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import styles from "./ContactSection.module.css";
import emailSvg from "../../assets/email.svg";
import linkedinSvg from "../../assets/linkedin.svg";

const EMAIL = "fes.khua@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/yevhenii-fesenko-seniorengineer/";
const ContactSection = () => {
  return (
    <Stack className="wrapper_section" id="Contact">
      <Container>
        <span className="heding_meta ">Get in Touch</span>
        <Row>
          <Col md={6}>
            <h2 className="heading_description">Contact</h2>
          </Col>
        </Row>
      </Container>

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
      <Stack
        className={`${styles.contact} align-content-center mb-4`}
        direction="horizontal"
        gap={3}
      >
        <div className={styles.colorlib_icon} style={{ width: "100px" }}>
          <img alt="linkedinSvg" src={linkedinSvg} />
        </div>
        <a href={LINKEDIN} style={{wordBreak: "break-word"}} rel="noreferrer" target="_blank">{LINKEDIN}</a>
      </Stack>
    </Stack>
  );
};

export default ContactSection;
