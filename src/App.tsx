import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;