import cornucopiaIphone from '../../assets/project-mockups/cornucopia-iphone.png'
import cornucopiaLaptop from '../../assets/project-mockups/cornucopia-laptop.png'
import dungeonManagerLaptop from '../../assets/project-mockups/dungeon-manager-laptop.png'
import runningManIphone from '../../assets/project-mockups/running-man-iphone.png'
import runningManLaptop from '../../assets/project-mockups/running-man-laptop.png'
import sushiTokyoLaptop from '../../assets/project-mockups/sushi-tokyo-laptop-mockup.png'
import React from 'react';

export default class projectImage extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    const srcArr = [cornucopiaIphone,cornucopiaLaptop,dungeonManagerLaptop,runningManIphone,runningManLaptop, sushiTokyoLaptop]
    const linkArr = ['cm','c','dm','rmm', 'rm', 'st']
    if(this.props.project.mobilePic){
      var mobilePic = <img className="project-mobile-frame project-frame"
                           src={srcArr[linkArr.indexOf(this.props.project.mobilePic)]}
                           alt="mobilePic"></img>
    }
    return(
      <section className="project-frames-container">
        <img className="project-frame "
             src={srcArr[linkArr.indexOf(this.props.project.pic)]}
             alt={this.props.project.title} ></img>
        {/* {mobilePic} */}
      </section>
    )
  }
}
