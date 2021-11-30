import { Route, Switch } from 'react-router';
import Header from './component/Header';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Header></Header>
      
      <div className="container">
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route exact path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/projects/:id">
            <Project></Project>
          </Route>
        </Switch>
      </div>
    </div>

  );
}

export default App;
