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
import { useEffect, useState } from "react";

function App() {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isSmSize = windowSize.innerWidth < 769;

  return (
    <Stack className="align-items-center">
      <div className="wrapper_content">
        <Stack direction="horizontal">
          {(!isSmSize || open) && <SideBar />}

          <Stack className="section">
            {isSmSize && !open && (
              <i
                className="menu_icon bi bi-list"
                onClick={() => {
                  setOpen(true);
                }}
              ></i>
            )}{" "}
            {isSmSize && open && (
              <i
                className="menu_icon bi bi-x-lg"
                onClick={() => {
                  setOpen(false);
                }}
              ></i>
            )}
            <HomeSection />
            <AboutSection />
            <ServicesSection />
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
