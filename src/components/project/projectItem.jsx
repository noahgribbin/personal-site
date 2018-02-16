'use strict';

import React from 'react';
import ProjectContent from './projectContent.jsx';
import ProjectImage from './projectImage.jsx';

export default class projectItem extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props);
    this.state = {

    }
  }

  render(){
    return(
      <section className="project-item">
        <div className="project-item-center-container">            
          <ProjectImage
            project={this.props.project}/>
          <ProjectContent
            project={this.props.project}/>
        </div>
      </section>
    )
  }
}
