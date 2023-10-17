import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Stack } from "react-bootstrap";
import {
  AboutSection,
  HomeSection,
  SideBar,
  ServicesSection,
  ExperienceSection,
  SkillsSection,
  WorkSection,
  EducationSection,
  ContactSection,
} from "./components";
import { useEffect, useRef, useState } from "react";

function App() {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [open, setOpen] = useState(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const prevScrollTop = lastScrollTop.current;

      if (prevScrollTop === 0) {
        lastScrollTop.current = scrollTop;
        return;
      }

      if (prevScrollTop !== scrollTop) {
        setOpen(null);
        lastScrollTop.current = scrollTop;
      }
    };

    window.addEventListener("scrollend", handleScroll);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("scrollend", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isSmSize = windowSize.innerWidth < 769;
  const isMdSize = windowSize.innerWidth < 992;

  return (
    <Stack className="align-items-center">
      <div className="wrapper_content">
        <Stack direction="horizontal">
          <SideBar open={open} isSmSize={isSmSize} />
          <Stack className="section">
            {isSmSize && !open && (
              <i
                className="menu_icon bi bi-list"
                onClick={() => {
                  setOpen(true);
                }}
              />
            )}
            {isSmSize && open && (
              <i
                className="menu_icon bi bi-x-lg"
                onClick={() => {
                  setOpen(false);
                }}
              />
            )}
            <HomeSection />
            <AboutSection />
            <ServicesSection isMdSize={isMdSize}/>
            <SkillsSection />
            <EducationSection />
            <ExperienceSection />
            <WorkSection />
            <ContactSection />
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}

export default App;
