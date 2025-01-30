import React, { Component } from 'react'

export default class Novosti extends Component {
  render() {
    return (
<>
<h1 className='nash_pro_h1'>Новости</h1>
<div className='Novosti_box container'>
<div className='box_card'>
    <img className='img_nowosti' src="newi1.svg" alt="No img?"/>
    <p>21.01.2022</p>
    <h3>Туба, как вид упаковки</h3>
</div>
<div className='box_card'>
    <img className='img_nowosti' src="nwei2.svg" alt="No img?"/>
    <p>21.01.2022</p>
    <h3>Туба, как вид упаковки</h3>
</div>
<div className='box_card'>
    <img className='img_nowosti' src="nwe3.svg" alt="No img?"/>
    <p>21.01.2022</p>
    <h3>Туба, как вид упаковки</h3>
</div>
</div>
<div className='div_pro_button'>
<button className='button_pro'>
Все новости
</button>
</div>
</>
    )
  }
}
