import { useEffect, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Lost from '../pages/Lost';
//import Contact from '../pages/Contact';

const Routes = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let location = useLocation();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [location]);
  return (
    <div ref={scrollRef}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        {/* <Route path="/contact">
        <Contact />
  </Route>*/}
        <Route>
          <Lost />
        </Route>
      </Switch>
    </div>
  );
};
export default Routes;

