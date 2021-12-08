import React, { Component } from 'react'


class ShowTest extends Component{

    

  render(){
    return(
      <div className="carousel">
        <div className="carouselInner" style={{backgroundImage: `url(${images[currImg].img})`}}>
        </div>
      </div>
    )
  }
}

export default ShowTest