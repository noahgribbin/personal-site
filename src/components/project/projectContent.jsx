'use strict';

import React from 'react';

export default class projectContent extends React.Component {
  constructor(props){
    super(props)
    console.log(this);
    this.setState = {

    }
  }

  render(){
    return(
        <section>
          <h3 className="project-title">{this.props.project.title}</h3>
          <p className="project-tags">{this.props.project.technologies}</p>
          <p className="project-description">{this.props.project.body}</p>
          <button className="project-button-link">VISIT WEBSITE</button>
        </section>
    )
  }
}
