'use strict';

import React from 'react';

export default class PortfolioItem extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props);
    this.state = {

    }
  }

  render(){
    return(
      <section>
        <p>{this.props.project.title}</p>
      </section>
    )
  }
}
