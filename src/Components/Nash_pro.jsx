import './main.css'
import React, { Component } from 'react'

export default class Nash_pro extends Component {
  render() {
    return (
    <>
    <h1 className='nash_pro_h1'>Наша <b>продукция</b></h1>
<div className='container nash_pro'>
<img className='img_product' src="1.svg" alt="No img?" />
<img className='img_product' src="2.svg" alt="No img?" />
<img className='img_product' src="3.svg" alt="No img?" />
<img className='img_product' src="4.svg" alt="No img?" />
<img className='img_product' src="5.svg" alt="No img?" />
</div>
<div className='div_pro_button'>
<button className='button_pro'>
    Перейти в каталог
</button>
</div>
    </>
    )
  }
}
