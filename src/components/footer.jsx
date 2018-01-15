'use strict';

import React from 'react';

export default class footer extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <section className="footer">
        <div className="social-link-container">
          <a className="social-link fa fa-github fa-2x"
             href="https://github.com/noahgribbin/"></a>
          <a className="social-link fa fa-linkedin fa-2x"
             href="https://www.linkedin.com/in/noahgribbin/"></a>
             <p className="copyright">ng &copy; 2017</p>
        </div>
      </section>
    )
  }
}
