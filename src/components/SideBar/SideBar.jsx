import { Image, Nav, Stack } from 'react-bootstrap';
import styles from './SideBar.module.css';
import photo from '../../assets/fes.jpg';

export const MAP_NAV = [
  'Home',
  'About',
  'Services',
  'Skills',
  'Education',
  'Experience',
  'Work',
  'Interests',
  'Contact',
];
const SideBar = ({ activeIndex, open }) => {
  return (
    <>
      <Stack
        className={`${styles.wrapper} align-items-center  
        ${styles.side_menu} ${open ? styles.box : styles.animation_box}
        `}
        gap={2}
        id="side-bar"
      >
        <Image className={styles.author_img} src={photo} roundedCircle />
        <h1 className={styles.author_name}>
          <span>Yevhenii Fesenko</span>
        </h1>
        <div className={styles.author_position}>
          <span>Full Stack Web Developer</span>
          <div>From Ukraine</div>
        </div>
        <Nav
          className={`${styles.nav_panel} flex-column justify-content-center mt-3`}
          activeKey={activeIndex}
          variant="underline"
        >
          {MAP_NAV.map((item, index) => (
            <Nav.Item
              className={`${styles.nav_panel_item} d-flex justify-content-center`}
              key={item}
            >
              <Nav.Link
                className={styles.nav_panel_link}
                eventKey={index}
                href={`#${item}`}
              >
                {item}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Stack>
    </>
  );
};

export default SideBar;
