import logo from './logo.svg';
import './index.css';
import Menu from './Menu';
import SkillsList from './SkillsList';
import Intro from './Intro';
import Bio from './Bio';

function App() {
  
  return (
    <div className="App">
      <Menu />
      <Intro />
      <Bio />
      <SkillsList />
    </div>
  );
}

export default App;
