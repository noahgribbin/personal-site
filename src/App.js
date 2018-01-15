import React  from 'react';

import Home from './containers/home.jsx'
import Projects from './containers/projects.jsx'
import Contact from './containers/contact.jsx'
import Navbar from './components/nav/navbar.jsx'
import Footer from './components/footer.jsx'

import './scss/main.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
