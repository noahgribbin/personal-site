'use strict';

import React from 'react';
import $ from 'jquery';

export default class  Home extends React.Component {
  constructor(props){
    super(props)
    this.scrollToSection = this.scrollToSection.bind(this);
    this.state ={

    }
  }

  scrollToSection(e){
    var val = "#"+e.target.getAttribute("name");
    $('html, body').animate({
      scrollTop: ($(val).offset().top)
    },600);
  };

  render(){
    return(
      <section id="home"
               className="container">
        <header className="home-header">
          <h1 className="hero-title">Front End Developer</h1>
          <p>Based out of Seattle, WA. Specializing in responsive web design.</p>
          <button className="hero-button"
                  name="projects"
                  onClick={this.scrollToSection}>My Work</button>
        </header>
      </section>
    )
  }
}
