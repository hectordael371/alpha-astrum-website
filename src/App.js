import React from 'react';
import ProjectCard from './components/project-card/ProjectCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </header>
    </div>
  );
}

export default App;
