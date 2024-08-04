import React, { Component } from 'react'

export class HeaderCenter extends Component {
  render() {
    return (
      <header className="header observer-section" id="home">
      <div className="header-center">
        <div className="header-center__wrapper">
          <h1 className="name">Мальцев Владислав</h1>
          <p className="description">Привет! Меня зовут Владислав. Я интересуюсь программированием, давайте знакомиться!</p>
        </div>
      </div>
      </header>
    )
  }
}

export default HeaderCenter;
