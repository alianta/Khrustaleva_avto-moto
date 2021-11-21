import React from 'react';

function Contacts() {
  return (
    <div className="contacts">
      <ul className="contacts__info">
        <li className="contacts__item">
          <h3 className="contacts__item-title">Адрес</h3>
          <span className="contacts__item-text">Санкт-Петербург,<br/>набережная реки Карповки, дом 5</span>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__item-title">Режим работы</h3>
          <span className="contacts__item-text">Ежедневно, с 10:00 до 21:00</span>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__item-title">Телефон</h3>
          <a className="contacts__item-text" href="tel:+78003335599">8 (800) 333-55-99</a>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__item-title">E-mail</h3>
          <a className="contacts__item-text" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </li>
      </ul>
      <div className="map"></div>
    </div>
  );
}

export default Contacts;
