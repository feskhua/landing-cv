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
  Footer,
  InterestsSection,
} from "./components";
import { useEffect, useRef, useState } from "react";
import { MAP_NAV } from "./components/SideBar/SideBar";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  const interestsRef = useRef(null);
  const lastScrollTop = useRef(0);

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [open, setOpen] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0% -70% 0%",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idActivSection = entry.target.getAttribute("id");

          MAP_NAV.forEach((section, index) => {
            if (section === idActivSection) setActiveIndex(index);
          });
        }
      });
    }, options);

    const sectionsRef = [
      homeRef,
      aboutRef,
      servicesRef,
      skillsRef,
      educationRef,
      experienceRef,
      workRef,
    ];

    sectionsRef.forEach(({ current }) => {
      observer.observe(current);
    });
  }, [activeIndex]);

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
          <SideBar activeIndex={activeIndex} open={open} isSmSize={isSmSize} />
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
            <HomeSection ref={homeRef} />
            <AboutSection ref={aboutRef} />
            <ServicesSection isMdSize={isMdSize} ref={servicesRef} />
            <SkillsSection ref={skillsRef} />
            <EducationSection ref={educationRef} />
            <ExperienceSection ref={experienceRef} />
            <WorkSection ref={workRef} />
            <InterestsSection ref={interestsRef} />
            <ContactSection />
            <Footer />
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}

export default App;
