'use strict';

import React from 'react';
import $ from 'jquery'

export default class Navbar extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props);
    this.scrollToSection = this.scrollToSection.bind(this)
    this.showHideNav = this.showHideNav.bind(this)
    this.state = {
      position: 0
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.showHideNav)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.showHideNav)
  }

  scrollToSection(e){
    var val = "#"+e.target.getAttribute("name")
    console.log(val);
    console.log(typeof(val));
    $('html, body').animate({
      scrollTop: ($(val).offset().top)
    },700);
  };

  showHideNav(){
    $(window).bind('mousewheel', function(event) {
      if (event.originalEvent.wheelDelta >= 0) {
          // up
          $('nav.navbar').removeClass('hide')
          $('nav.navbar').addClass('show')
      }else {
          //down
          $('nav.navbar').removeClass('show')
          $('nav.navbar').addClass('hide')
      }
    });
  }



  render(){
    return(
      <section>
        <nav className="navbar">
          <div className="nav-title-container">
            <p className ="nav-title">Noah Gribbin</p>
            {/* <p className ="nav-title nav-subtitle">Front End Developer</p> */}
          </div>
          <div className="nav-link-container">
            <ul>
              <li className="nav-links"
                  onClick={this.scrollToSection}
                  name="home">Home</li>
              <li className="nav-links"
                  onClick={this.scrollToSection}
                  name="projects">Projects</li>
              <li className="nav-links"
                  onClick={this.scrollToSection}
                  name="contact">Contact</li>
            </ul>
          </div>
        </nav>
      </section>
    )
  }
}
