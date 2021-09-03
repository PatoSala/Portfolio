import './App.css';
import Nav from './Components/Nav/Nav';
import SocialIcons from './Components/SocialIcons/SocialIcons';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';
import AboutMe from './Components/AboutMe/AboutMe.js';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <SocialIcons/>
      <Nav/>
      <Main/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
