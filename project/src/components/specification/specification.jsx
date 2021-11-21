import React from 'react';

function Specification() {

  return (
    <ul className="specifications">
      <li className="specifications__item">
        <span className="specifications__title">Трансмиссия</span>
        <span className="specifications__value">Роботизированная</span>
      </li>
      <li className="specifications__item">
        <span className="specifications__title">Мощность двигателя, л.с.</span>
        <span className="specifications__value">249</span>
      </li>
      <li className="specifications__item">
        <span className="specifications__title">Тип двигателя</span>
        <span className="specifications__value">Бензиновый</span>
      </li>
      <li className="specifications__item">
        <span className="specifications__title">Привод</span>
        <span className="specifications__value">Полный</span>
      </li>
      <li className="specifications__item">
        <span className="specifications__title">Объем двигателя, л</span>
        <span className="specifications__value">2.4</span>
      </li>
      <li className="specifications__item">
        <span className="specifications__title">Макс. крутящий момент</span>
        <span className="specifications__value">370/4500</span>
      </li>
      <li className="specifications__item">
        <span className="specifications__title">Количество цилиндров</span>
        <span className="specifications__value">4</span>
      </li>
    </ul>
  );
}

export default Specification;
