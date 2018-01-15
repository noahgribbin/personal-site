'use strict';

import React from 'react';
import $ from 'jquery';

export default class contactContent extends React.Component {
  constructor(props){
    super(props);
    this.closeContact = this.props.closeContact.bind(this)
    this.state = {

    }
  }

  render(){
    return(
      <section className="contact-content">
        {/* <h3>Lorem</h3>
        <p></p>
        <section>
          <input className="contact-inupt"
                 placeholder="name"></input>
          <input className="contact-inupt"
                 placeholder="email"></input>
          <input className="contact-inupt"
                 placeholder="phone number"></input>
          <button onClick={this.closeContact}>SUBMIT</button>
        </section> */}
        <button onClick={this.closeContact}>SUBMIT</button>
      </section>
    )
  }
}
