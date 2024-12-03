import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import { project } from "./projectData/data";
import Github from "./components/Github";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <div id="projects">
        <h1 className="blue">Projects</h1>
      {project.map((elem) => (
        <Project
          name={elem.name}
          description={elem.description}
          Tools={elem.Tools}
          featureOne={elem.featureOne}
          featureTwo={elem.featureTwo}
          featureThree={elem.featureThree}
          featureFour={elem.featureFour}
          netlify_link={elem.netlify_link}
          github_link={elem.github_link}
          gif={elem.gif}
        />
      ))}
      </div>
      <Github/>
      <Contact />
    </div>
  );
}

export default App;
