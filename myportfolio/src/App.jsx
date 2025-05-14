import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import CV from './components/cv/Cv';

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="project"><Project /></div>
      <div id="cv"><CV /></div>
    </>
  );
};

export default App;
