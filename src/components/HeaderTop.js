import React from 'react';

export default function HeaderTop() {

/* Active link after click */
  const menuElementLinks = document.querySelectorAll(".menu-element__link");
  menuElementLinks.forEach(element => {
      element.addEventListener('click', function() {
          if (this.classList.contains('active')) {
              return;
          }

          const linkHref = this.getAttribute("href");
          document.getElementById(linkHref.replace("#", "")).scrollIntoView({
              behavior: 'smooth'
          });

          changeActiveMenuElement(this);
      });
  });
  function changeActiveMenuElement(element) {
    document.querySelector(".menu-element__link.active").classList.remove('active');
    element.classList.add('active');
  }

/* Active link on scroll to section */
  const options = {
    threshold: 0.45
  };
  const callback = function (entries) {
      entries.forEach(entry => {
          const sectionMenuLink = document.querySelector(`.menu-element__link[href='#${entry.target.id}']`);
          if (entry.isIntersecting && !sectionMenuLink.classList.contains('active')) {
              changeActiveMenuElement(sectionMenuLink);
          }
      });
  };
  const observer = new IntersectionObserver(callback, options);

  document.querySelectorAll(".observer-section").forEach(element => {
      observer.observe(element);
  })

  return (
    <div className="header-top fixed" id="header-top">
        <a href="" className="link logo">Мальцев Владислав</a>
        <nav className="navigation">
        <ul className="menu block-center">
            <li className="menu-element">
            <a className="menu-element__link link active" href="#home">Главная</a>
            </li>
            <li className="menu-element">
            <a className="menu-element__link link" href="#about-me">Обо&nbsp;мне</a>
            </li>
            <li className="menu-element">
            <a className="menu-element__link link" href="#skills">Навыки</a>
            </li>
            <li className="menu-element">
            <a className="menu-element__link link" href="#interests">Интересы</a>
            </li>
            <li className="menu-element">
            <a className="menu-element__link link" href="#contact-me">Контакты</a>
            </li>
        </ul>
        </nav>
        <div className="switcher-container block-center">
        <div className="switcher-wrapper">
            <input type="checkbox" id="lang" defaultChecked />
            <label className="switcher" htmlFor="lang">
            <span>Ru</span>
            <span>Eng</span>
            </label>
        </div>
        </div>
    </div>
  )
}
