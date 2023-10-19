import { forwardRef } from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import styles from "./InterestsSection.module.css";
import hickingImg from "../../assets/hicking.png";
import teaImg from "../../assets/tea.png";
import guitarImg from "../../assets/guitar.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const InterestsSection = forwardRef((_, ref) => {
  return (
    <Stack className="wrapper_section" id="Interests" ref={ref}>
      <Container>
        <span className="heding_meta ">Interests</span>
        <Row>
          <Col md={6}>
            <h2 className="heading_description">Personal Passions</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xg={{ span: 8, offset: 2 }}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className={`${styles.interest}`}>
                  <Image src={hickingImg} fluid />
                  <div className={styles.interest_content}>
                    <h5>Mountain hiking</h5>
                    <p>
                      Escaping from Babylon and staying in touch with nature is
                      a must for me.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.interest}`}>
                  <Image src={teaImg} fluid />
                  <div className={styles.interest_content}>
                    <h5>Chinese tea</h5>
                    <p>Best teacher in the world.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.interest}`}>
                  <Image src={guitarImg} fluid />
                  <div className={styles.interest_content}>
                    <h5>Playing guitar/Music</h5>
                    <p>Everything changed after the birth of rock-n-roll.</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
});

export default InterestsSection;
