import React from 'react';

function AutoCard() {
  return (
    <article className="product product--new">
      <section className="product-images">
        <img className="product-images__main" src="img/desktop-slide-1.jpg" width="600" height="375" alt="Фото Марпех 11"/>
        <a className="product-images__button product-images__button--disable" href="/" aria-label="Предыдущее изображение">
          <svg className="product-images__icon" width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.004 6.172 6.918.369M1.004 6.172l5.689 5.797M1.004 6.172l18.977.18" />
          </svg>
        </a>
        <ul className="product-images__list">
          <li className="product-images__item product-images__item--current">
            <img src="img/desktop-slide-1-prev.jpg" width="128" height="80" alt="Фото снаружи"/>
          </li>
          <li className="product-images__item">
            <img src="img/desktop-slide-2-prev.jpg" width="128" height="80" alt="Фото салона"/>
          </li>
          <li className="product-images__item">
            <img src="img/desktop-slide-3-prev.jpg" width="128" height="80" alt="Фото приборной панели"/>
          </li>
        </ul>
        <a className="product-images__button" href="/" aria-label="Следующее изображение">
          <svg className="product-images__icon" width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.987 6.172 13.075.369m5.912 5.803L13.3 11.969m5.687-5.797-18.972.18"/>
          </svg>
        </a>
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
