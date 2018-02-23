

import React from 'react';
// import $ from 'jquery';
import request from 'superagent';

const initialState = {
  name: '',
  email: '',
  subject: '',
  body: ''
}

export default class contactContent extends React.Component {
  constructor(props){
    super(props);
    this.getData= this.getData.bind(this)
    this.sendEmail= this.sendEmail.bind(this)
    this.state = initialState
  }

  getData(e){
    var val = e.target.value
    var name = e.target.name
    this.setState({
      [name]: val
    })
    console.log(this.state);
  }

  sendEmail(e){
    e.preventDefault()
    // rudamentary form check
    if(this.state === initialState) {
      console.log('no data');
      return
    }
    request.post('http://noahagribbin.herokuapp:4000/send-email')
    .send(this.state)
    .end((err, res) => {
      if(err) console.error(err);
    })
    document.getElementById('email-form').reset()
    this.setState(initialState)
  }

  render(){
    return(
      <section className="contact-content">
        <div>
          <h1>CONTACT</h1>
          <p>CURRENTLY AVAILABLE FOR CONTRACT OR FULL-TIME WORK,
            AND WOULD LOVE TO HEAR FROM YOU</p>
        </div>
        {/* <form className="contact-form" action="http://localhost:4000/send-email" method="post"> */}
        <form id="email-form" className="contact-form" onSubmit={this.sendEmail}>
          <input className="contact-input" placeholder="Your name" name="name" onChange={this.getData}></input>
          <input className="contact-input" placeholder="Your email" name="email" onChange={this.getData}></input>
          <input className="contact-input" placeholder="Subject" name="subject" onChange={this.getData}></input>
          <textarea className="contact-input contact-textarea" placeholder="Your message" name="body" onChange={this.getData}></textarea>
          <button  type="submit">SUBMIT</button>
        </form>
      </section>
    )
  }
}
