'use strict';

import React from 'react';

export default class projectImage extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props);
    this.state = {

    }
  }

  render(){
    if(this.props.project.mobilePic){
      var mobilePic = <img className="project-mobile-frame project-frame"
                           src={this.props.project.mobilePic}
                           alt="mobilePic"></img>
    }
    return(
      <section className="project-frames-container">
        <img className="project-frame "
             src={this.props.project.pic}
             alt={this.props.project.title} ></img>
        {/* {mobilePic} */}
      </section>
    )
  }
}
