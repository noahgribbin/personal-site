'use strict';

import React from 'react';
// import $ from 'jquery'

import ContactContent from '../components/contact/contactContent.jsx'

export default class  Contact extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }


  render(){
    return(
      <section id="contact"
               className="container">
        <ContactContent/>

      </section>
    )
  }
}
