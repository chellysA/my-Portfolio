import { useEffect, useRef } from 'react';
import { Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

const Routes = () => {
  const scrollRef = useRef(null);
  let location = useLocation();

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [location]);
  console.log('entro');
  return (
    <div ref={scrollRef}>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
};
export default Routes;

