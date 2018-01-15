'use strict';

import React from 'react';
import $ from 'jquery';


export default class contactPreview extends React.Component {
  constructor(props){
    super(props)
    this.openContact = this.props.openContact.bind(this)
    this.state = {

    }
  }



  render(){
    return(
      <section className="contact-preview">
        <div className="contact-preview-content">
          <h3 className="contact-preview-title">Lorem Ipsum</h3>
          <p className="contact-preview-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus semper lacus</p>
          <div className="contact-cover"></div>
          <button className="contact-button"
                  onClick={this.openContact}>GET STARTED</button>
        </div>
      </section>
    )
  }
}
