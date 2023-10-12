import { Image, Nav, Stack } from "react-bootstrap";
import styles from "./SideBar.module.css";
import photo from "../../assets/fes.jpg";

const MAP_NAV = [
  "Home",
  "About",
  "Services",
  "Skills",
  "Education",
  "Experience",
  "Work",
  "Contact",
];

const SideBar = ({ isSmSize, open }) => {
  return (
    <>
      {(open !== null || !isSmSize) &&
        <Stack
          className={`${styles.wrapper} align-items-center  ${
            !isSmSize || open ? styles.box : styles.animation_box
          }`}
          gap={2}
          id="side-bar"
        >
          <Image className={styles.author_img} src={photo} roundedCircle />
          <h1 className={styles.author_name}>
            <a className="text-decoration-none" href="#1">
              Yevhenii Fesenko
            </a>
          </h1>
          <div className={styles.author_position}>
            <a className="text-decoration-none" href="#2">
              Full Stack Web Developer
            </a>
            from Ukraine
          </div>
          <Nav
            className={`${styles.nav_panel} flex-column justify-content-center`}
            defaultActiveKey={`/${MAP_NAV[0]}`}
            variant="underline"
          >
            {MAP_NAV.map((item, index) => (
              <Nav.Item
                className={`${styles.nav_panel_item} d-flex justify-content-center`}
                key={item}
              >
                <Nav.Link
                  className={styles.nav_panel_link}
                  eventKey={item}
                  href={`#${item}`}
                >
                  {item}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Stack>
      }
    </>
  );
};

export default SideBar;
