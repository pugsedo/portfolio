import NavBar from "./components/navbar";

import LandingPage from "./components/landing";
import ProjectsPage from "./components/projects";

function Home() {
  return (
    <div className="app">
      <NavBar/>
      <LandingPage/>
      <ProjectsPage/>
    </div>
  );
}

export default Home;