import Base from "./base";

import LandingPage from "./components/landing";
import ProjectsPage from "./components/aboutMe";

function Home() {
  return (
    <Base>
      <LandingPage/>
      <ProjectsPage/>
    </Base>
  );
}

export default Home;
