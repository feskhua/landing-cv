import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Stack } from 'react-bootstrap';
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
} from './components';
import { useEffect, useRef, useState } from 'react';
import { MAP_NAV } from './components/SideBar/SideBar';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  const interestsRef = useRef(null);
  const mainRef = useRef(null);

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [open, setOpen] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isSmSize = windowSize.innerWidth < 769;
  const isMdSize = windowSize.innerWidth < 992;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0% -70% 0%',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idActiveSection = entry.target.getAttribute('id');

          MAP_NAV.forEach((section, index) => {
            if (section === idActiveSection) setActiveIndex(index);
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
      if (isSmSize) {
        setOpen(false);
      }
    };

    mainRef.current.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      mainRef.current.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [mainRef]);

  return (
    <Stack className="align-items-center">
      <div className="wrapper_content">
        <Stack direction="horizontal">
          {(Boolean(open) || !isSmSize) && (
            <SideBar
              activeIndex={activeIndex}
              open={open}
              isSmSize={isSmSize}
            />
          )}

          <Stack ref={mainRef} className="section main">
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
