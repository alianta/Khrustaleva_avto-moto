import React from 'react';
import {POPUP_CLOSE_BUTTON_ID, RatingNames, RATING_STAR_COUNT} from '../../const';

const RATING_TEMPLATE_VALIE = 3;

function Reviews() {
  return (
    <div className="reviews">
      <button id={POPUP_CLOSE_BUTTON_ID} className="button button--third">Оставить отзыв</button>
      <ul className="reviews-list">
        <li className="review-item">
          <h3 className="review-item__author">Борис Иванов</h3>
          <dl className="pros-and-cons">
            <dt className="pros-and-cons__title pros-and-cons__title--first">Достоинства</dt>
            <dd className="pros-and-cons__text">мощность, внешний вид</dd>
            <dt className="pros-and-cons__title">Недостатки</dt>
            <dd className="pros-and-cons__text">Слабые тормозные колодки (пришлось заменить)</dd>
          </dl>
          <div className="comment">
            <h3 className="comment__title">Комментарий</h3>
            <p className="comment__text">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</p>
          </div>
          <div className="rating-value">
            {Array.from({length: RATING_STAR_COUNT}).map((_, id) => {
              const keyValue = `rating-value-star-${id}`;
              return (
                <span key={keyValue} className={`rating-value__star ${RATING_TEMPLATE_VALIE>=id+1?'rating-value__star--active':''}`}></span>
              );
            })}
            <span className="rating-value__name">Советует</span>
          </div>
          <div className="review-footer">
            <time className="review-footer__date" dateTime="2021-11-22T18:18">1 минуту назад</time>
            <button className="review-footer__button">Ответить</button>
          </div>
        </li>
        <li className="review-item">
          <h3 className="review-item__author">Марсель Исмагилов</h3>
          <dl className="pros-and-cons">
            <dt className="pros-and-cons__title pros-and-cons__title--first">Достоинства</dt>
            <dd className="pros-and-cons__text">Cтиль, комфорт, управляемость</dd>
            <dt className="pros-and-cons__title">Недостатки</dt>
            <dd className="pros-and-cons__text"> Дорогой ремонт и обслуживание</dd>
          </dl>
          <div className="comment">
            <h3 className="comment__title">Комментарий</h3>
            <p className="comment__text">Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</p>
          </div>
          <div className="rating-value">
            {Array.from({length: RATING_STAR_COUNT}).map((_, id) => {
              const keyValue = `rating-value-star-${id}`;
              return (
                <span key={keyValue} className={`rating-value__star ${RATING_TEMPLATE_VALIE>=id+1?'rating-value__star--active':''}`}></span>
              );
            })}
            <span className="rating-value__name">Советует</span>
          </div>
          <div className="review-footer">
            <time className="review-footer__date"  dateTime="2021-11-22T18:18">1 минуту назад</time>
            <button className="review-footer__button">Ответить</button>
          </div>
        </li>
        {localStorage.getItem('name')?
          <li className="review-item">
            <h3 className="review-item__author">{localStorage.getItem('name')}</h3>
            <dl className="pros-and-cons">
              <dt className="pros-and-cons__title pros-and-cons__title--first">Достоинства</dt>
              <dd className="pros-and-cons__text">{localStorage.getItem('pros')}</dd>
              <dt className="pros-and-cons__title">Недостатки</dt>
              <dd className="pros-and-cons__text">{localStorage.getItem('cons')}</dd>
            </dl>
            <div className="comment">
              <h3 className="comment__title">Комментарий</h3>
              <p className="comment__text">{localStorage.getItem('comment')}</p>
            </div>
            <div className="rating-value">
              {Array.from({length: RATING_STAR_COUNT}).map((_, id) => {
                const keyValue = `rating-value-star-${id}`;
                return (
                  <span key={keyValue} className={`rating-value__star ${localStorage.getItem('rating')>=id+1?'rating-value__star--active':''}`}></span>
                );
              })}
              <span className="rating-value__name">{RatingNames[localStorage.getItem('rating')]}</span>
            </div>
            <div className="review-footer">
              <time className="review-footer__date"  dateTime="2021-11-22T18:18">1 минуту назад</time>
              <button className="review-footer__button">Ответить</button>
            </div>
          </li>:''}
      </ul>
    </div>
  );
}

export default Reviews;
