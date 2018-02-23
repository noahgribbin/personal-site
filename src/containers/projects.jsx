

import React from 'react';
import projectData from '../data/projectData.json'
import ProjectItem from '../components/project/projectItem.jsx'

export default class  Projects extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    var project = projectData.map(function(item){
      console.log(item);
      return(
        <ProjectItem
          key = {item.key}
          project = {item}
        />
      )
    })
    return(
      <section id="projects"
               className="container">
        <h3 className="project-section-title">My Work</h3>       
        {project}
      </section>
    )
  }
}

// should contain picture of the project, description of the project, features skills/technologies used, link to
