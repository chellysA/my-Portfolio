import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Routes from './root/Routes';
import ThemeColor from './components/ThemeColor';
import Mode from './components/Mode';
import Providers from './root/Providers';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Providers>
      <Router>
        <NavBar />
        <ThemeColor />
        <Mode />
        <Routes />
      </Router>
    </Providers>
  );
}

export default App;

