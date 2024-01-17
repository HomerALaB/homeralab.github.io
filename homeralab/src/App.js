import logo from './logo.svg';
import './index.css';
import Menu from './Menu';
import SkillsList from './SkillsList';
import Intro from './Intro';
import Bio from './Bio';
import Slideshow from './Slideshow'
import ProjectsList from './ProjectsList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Menu />
      <Intro />
      <Bio id="bio" />
      <Work />
      <SkillsList />
      <ProjectsList />
      <Slideshow id="slideshow" />
    </div>
  );
}

export default App;
