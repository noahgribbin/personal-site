'use strict';

import React from 'react';
import portfolioData from '../data/portfolioData.json'
import PortfolioItem from '../components/portfolio/portfolioItem.jsx'

export default class  Projects extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    var project = portfolioData.map(function(item){
      console.log(item);
      return(
        <PortfolioItem
          key = {item.key}
          project = {item}
        />
      )
    })
    return(
      <section>
        {project}
      </section>
    )
  }
}

// should contain picture of the project, description of the project, features skills/technologies used, link to
