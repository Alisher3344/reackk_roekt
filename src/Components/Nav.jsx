import './main.css'
import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <>
      <nav className='container'>
<img src="logo (1).png" alt="No logo?"/>
<ul>
    <li>Продукция</li>
    <li>Сертификаты</li>
    <li>Наша команда</li>
    <li>О нас</li>
    <li>Новости</li>
    <li>Вакансии</li>
    <li>Контакты</li>
</ul>
<img style={{width:"40px"}} src="467619.png" alt="logo dark light" />
      </nav>
     <a href="#"> <button class="go_top">
  <svg viewBox="0 0 384 512" class="svgIcon">
    <path
      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
    ></path>
  </svg>
</button></a>

      </>
    )
  }
}

export default Nav