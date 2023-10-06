import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Stack } from "react-bootstrap";
import SideBar from "./components/SideBar/SideBar";
import HomeSection from "./components/HomeSection/HomeSection";

function App() {
  return (
    <Stack className="align-items-center">
      <div className="wrapper_content">
        <Stack direction="horizontal">
          <SideBar />
          <Stack>
            <HomeSection />
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}

export default App;
