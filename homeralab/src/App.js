import logo from './logo.svg';
import './index.css';
import Menu from './Menu';
import SkillsList from './SkillsList';
import Intro from './Intro';
import Bio from './Bio';
import Slideshow from './Slideshow'
import ProjectsList from './ProjectsList';

function App() {
  
  return (
    <div className="App">
      <Menu />
      <Intro />
      <Bio />
      <SkillsList />
      <ProjectsList />
      <Slideshow />
    </div>
  );
}

export default App;
