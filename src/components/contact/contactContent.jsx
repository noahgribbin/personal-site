

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
    });
  }

  sendEmail(e){
    e.preventDefault()
    // rudamentary form check
    if(this.state === initialState) {
      return
    }
    request.post('https://noahagribbin.herokuapp:4000/send-email')
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
          <p>CURRENTLY AVAILABLE FOR CONTRACT OR FULL-TIME WORK,
            AND WOULD LOVE TO HEAR FROM YOU</p>
        </div>
        <form id="email-form" className="contact-form" onSubmit={this.sendEmail}>
          <input className="contact-input" placeholder="Name" name="name" onChange={this.getData}></input>
          <input className="contact-input" placeholder="Email" name="email" onChange={this.getData}></input>
          <input className="contact-input" placeholder="Subject" name="subject" onChange={this.getData}></input>
          <textarea className="contact-input contact-textarea" placeholder="Message" name="body" onChange={this.getData}></textarea>
          <button  type="submit">SUBMIT</button>
        </form>
      </section>
    )
  }
}
