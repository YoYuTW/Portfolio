import React from 'react';
import './App.css';
import About from './component/About';
import Homepage from './component/Homepage';
import Project from './component/Project';
import Footer from './component/Footer';

function App() {    
  return (
    <div className="App">
      <Homepage/>
      <About />
      <hr />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
