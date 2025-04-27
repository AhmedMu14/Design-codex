import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar/index.jsx';
import Home from './Components/Home/index.jsx';
import About from './Components/About/index.jsx';
import Work from './Components/Works/index.jsx';
import Team from './Components/Team/index.jsx'
import Services from './Components/Services/index.jsx';
import Portfolio from './Components/Portfolio/index.jsx';
import FAQs from './Components/FAQs/index.jsx';
import Contact from './Components/Contact/index.jsx';
import Scroll from './Components/Scroll/index.jsx';
import WhatsApp from './Components/Whatsapp/index.jsx';
import Footer from './Components/Footer/index.jsx';
import React from 'react';

const App = () => {
  return <div>

    <ToastContainer/>
    <Navbar/>
    <Home/>
    <About/>
    <Work/>
    <Team/>
    <Services/>
    <Portfolio/>
    <FAQs/>
    <Contact/>
    <Scroll/>
    <WhatsApp/>
    <Footer/>
  </div>
  };

  export default App;