import React, { Component } from 'react'
import "./main.css"
export default class header extends Component {
  render() {
    return (
     <>
      <header >
       <div className='container'>
       <div className='header_left_elem' style={{padding:"165px 0px 150px 0px"}}>
            <p>LEANGROUP - тубы и этикетки</p>
            <h2>Ламинатные тубы</h2>
            <h5>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</h5>
            <button>Каталог</button>
         </div>
       </div>
      </header>
     </>
    )
  }
}
