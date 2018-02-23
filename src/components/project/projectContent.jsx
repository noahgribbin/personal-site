

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
        <section className="project-content">
          <h3 className="project-title">{this.props.project.title}</h3>
          <p className="project-tags">{this.props.project.technologies}</p>
          <p className="project-description">{this.props.project.body}</p>
          <a href={this.props.project.url} className="project-button-link">VISIT WEBSITE</a>
        </section>
    )
  }
}
