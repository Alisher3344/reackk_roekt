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
      </>
    )
  }
}

export default Nav