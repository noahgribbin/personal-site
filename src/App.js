import React  from 'react';

import Home from './containers/home.jsx'
import Projects from './containers/projects.jsx'
import Contact from './containers/contact.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Home />
      <Projects />
      <Contact />
      </div>
    );
  }
}

export default App;
