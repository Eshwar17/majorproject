import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/Layout/NotFound/NotFound';
import CommunityComponents from './components/CommunityComponents/CommunityComponents';
import Services from './components/Testimonials/Services';
import CampusAmbassador from './components/CampusAmbassador/CampusAmbassador';
import BootcampsPage from './components/Bootcamps/Bootcamps';
import Outsourcing from './components/Outsourcing/Outsourcing';
import Careers from './components/Careers/Careers';
import TechInWeek from './components/Bootcamps/TechInWeek';

function App() {
  // window.addEventListener("contextmenu", (e)=>{
  //   e.preventDefault();
  // })
  useEffect(() => {
    // Function to change the title dynamically
    function changeTitle() {
      var titles = [
        "GrapplTech: Learn. Hire. Grow.",
        "GrapplTech: Skill up. Hire up. Tech up.",
        "GrapplTech: Don't struggle, Grappl with tech"
      ]; // Array of titles
      var index = 0; // Initial index

      // Function to update the title
      function updateTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length; // Increment the index and loop back to the start
      }

      // Update the title every 2 seconds (2000 milliseconds)
      const intervalId = setInterval(updateTitle, 4000);

      // Clean up the interval on unmounting the component
      return () => clearInterval(intervalId);
    }

    changeTitle();
  }, []);
  
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bootcamps" element={<BootcampsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/portfolio-services" element={<CommunityComponents />} />
        <Route path="/workshops" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/partnerregistration" element={<CampusAmbassador />} />
        <Route path="/outsourcing" element={<Outsourcing />} />
        <Route path="/techinweek" element={<TechInWeek />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
