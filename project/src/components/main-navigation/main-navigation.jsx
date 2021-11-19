import React from 'react';

function MainNavigation() {
  return (
    <ul className="main-nav">
      <li className="main-nav__item">
        <a className="main-nav__link" href="/">Автомобили</a>
      </li>
      <li className="main-nav__item">
        <a className="main-nav__link" href="/">Контакты</a>
      </li>
      <li className="main-nav__item">
        <a className="main-nav__link" href="/">Услуги</a>
      </li>
      <li className="main-nav__item">
        <a className="main-nav__link" href="/">Вакансии</a>
      </li>
    </ul>
  );
}

export default MainNavigation;
