import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Stack } from "react-bootstrap";
import { AboutSection, HomeSection, SideBar, ServicesSection, ExperienceSection, SkillsSection, WorkSection } from "./components";



function App() {
  return (
    <Stack className="align-items-center">
      <div className="wrapper_content">
        <Stack direction="horizontal">
          <SideBar />
          <Stack>
            <HomeSection />
            <AboutSection />
            <ServicesSection />
            <SkillsSection />
            <ExperienceSection />
            <WorkSection />
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}

export default App;
