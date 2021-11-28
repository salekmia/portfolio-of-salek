import { Route, Switch } from 'react-router';
import Header from './component/Header';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolios from './pages/Portfolios';
import Resume from './pages/Resume';

function App() {
  return (
    <div>
      <Header></Header>
      
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
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/portfolios">
            <Portfolios></Portfolios>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
