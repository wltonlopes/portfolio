import './App.css';
import Navb from './components/Nav';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Intro from './pages/Intro';
import MyStacks from './pages/MyStacks';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Navb/>
      <Intro/>
      <Projects/>
      <About/>
      <MyStacks/>
      <Contacts/>
    </div>
  );
}

export default App;
