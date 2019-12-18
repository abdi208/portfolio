import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name'
import Nav from './Nav'
import Section from './Section'
import Brand from './Brand';
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import { 
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <Section  
        // title="Section 2"
        subtitle={Brand}
        dark={false}
        id="section2"
      />
      <Section
          
          subtitle={Projects}
          dark={false}
          id="section1"
        />
        <Section
          // title="Section 3"
          subtitle={Skills}
          dark={false}
          id="section3"
        />
        <Section
          // title="Section 3"
          subtitle={Contact}
          dark={true}
          id="section4"
        />
      {/* <Name />
      <Brand />
      <Skills />
      <Projects /> */}

      </Router>
    </div>
  );
}

export default App;
