import React, { Component } from 'react'
import './main.css'
import Slider from 'react-slick';

export class Caruser extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
      <div className='container'>
      <Slider {...settings}>
      <div className='div_caruserl'>
        <h3>1</h3>
      </div>
      <div className='div_caruserl'>
        <h3>2</h3>
      </div>
      <div className='div_caruserl'>
        <h3>3</h3>
      </div>
      <div className='div_caruserl'>
        <h3>4</h3>
      </div>
      <div className='div_caruserl'>
        <h3>5</h3>
      </div>
      <div className='div_caruserl'>
        <h3>6</h3>
      </div>
    </Slider>
      </div>
    )
  }
}

export default Caruser