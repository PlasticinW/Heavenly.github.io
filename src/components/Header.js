import React from 'react'

export default function Header() {
  window.addEventListener("componentDidMount", (event) => {
    const checkbox = document.querySelector("input[name=hamburger]");
    const header = document.getElementById("header-top");
    console.debug('here');

    checkbox.addEventListener('change', () => {
      if(this.checked) {
        console.debug('here');
        header.style.translate = 'transformX(0)';
      } else header.style.translate = 'transformX(100%)';
    })
  })
  
  return (
    <header className="header observer-section" id="home">
    <input className="checkbox" type="checkbox" name="hamburger" id="hamburger" />
    <label className="menu-hamburger" htmlFor="hamburger" >
      <span className="line line1"></span>
      <span className="line line2"></span>
      <span className="line line3"></span>
    </label>
    <div className="header-center">
      <div className="header-center__wrapper">
        <h1 className="name">Мальцев Владислав</h1>
        <p className="description">Привет! Меня зовут Владислав. Я интересуюсь программированием, давайте знакомиться!</p>
      </div>
    </div>
    </header>
  )
}
