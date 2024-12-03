import { useEffect } from 'react';
import '../src/asset/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "./App.css";
import 'aos/dist/aos'
import AOS from 'aos';
import Header from "./components/Header/Header";
import Copyright from './components/Footer/Copyright';
import Footer from './components/Footer/Footer';
import AboutUs from './components/About/AboutUs';
import OurServices from './components/OurServices/OurServices';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <div className="App">
     <Header />
      <AboutUs />
    <OurServices />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;






