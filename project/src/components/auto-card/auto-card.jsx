import React from 'react';

function AutoCard() {
  return (
    <article className="product">
      <section className="produst-images">
        <img className="produst-images__main" src="img/desktop-slide-1.jpg" width="600" height="375" alt="Фото Марпех 11"/>
        <ul className="produst-images__list">
          <li className="produst-images__item produst-images__item--current">
            <img src="img/desktop-slide-1-prev.jpg" width="128" height="80" alt="Фото снаружи"/>
          </li>
          <li className="produst-images__item">
            <img src="img/desktop-slide-2-prev.jpg" width="128" height="80" alt="Фото салона"/>
          </li>
          <li className="produst-images__item">
            <img src="img/desktop-slide-3-prev.jpg" width="128" height="80" alt="Фото приборной панели"/>
          </li>
        </ul>
      </section>
      <section className="product__short-information">
        <h2 className="product__name">Марпех 11</h2>
        <ul className="main-features-list">
          <li className="main-features-list__item">бензин</li>
          <li className="main-features-list__item">механика</li>
          <li className="main-features-list__item">100 л.с.</li>
          <li className="main-features-list__item">1.4 л</li>
        </ul>
        <div className="price">
          <span className="price__current">2 300 000 ₽</span>
          <span className="price__old">2  400 000 ₽</span>
        </div>
        <button className="button button--first" type="button">оставить заявку</button>
        <button className="button button--second" type="button">В КРЕДИТ ОТ 11 000 ₽</button>
      </section>
    </article>
  );
}

export default AutoCard;
