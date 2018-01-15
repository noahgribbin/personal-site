'use strict';

import React from 'react';
import $ from 'jquery'

import ContactPreview from '../components/contact/contactPreview.jsx'
import ContactContent from '../components/contact/contactContent.jsx'

export default class  Contact extends React.Component {
  constructor(props){
    super(props)
    this.openContact = this.openContact.bind(this);
    this.closeContact = this.closeContact.bind(this);
    this.state={
    }
  }

  openContact(){
    console.log($(window));
    $('body').css('overflow' , 'hidden')
    $('.social-link-container').css('display' , 'none')
    $('.navbar').css('display' , 'none')
    $('.contact-cover').addClass('open-cover');
    setTimeout(function(){
      $('.contact-content').addClass('active-content')
    },600)
  };
  closeContact(){
    console.log($(window));
    $('body').css('overflow' , 'visible')
    $('.social-link-container').css('display' , 'block')
    $('.navbar').css('display' , 'block')
    $('.contact-cover').removeClass('open-cover');
    // setTimeout(function(){
      $('.contact-content').removeClass('active-content')
    // },600)
  };

  render(){
    return(
      <section id="contact"
               className="container">
        <ContactPreview
          openContact={this.openContact}/>
        <ContactContent
          closeContact={this.closeContact}/>

      </section>
    )
  }
}
