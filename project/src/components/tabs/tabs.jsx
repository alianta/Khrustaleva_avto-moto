import React, {useState} from 'react';
import {TabNumbers} from '../../const';
import Specification from '../specification/specification';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const changeActiveTab = (tabNumber) => {
    switch(tabNumber){
      case TabNumbers.CONTACTS:
        return <Contacts/>;
      case TabNumbers.REVIEWS:
        return <Reviews/>;
      default:
        return <Specification/>;
    }
  };

  return (
    <div className="information">
      <ul className="information__list">
        <li
          className={activeTab === TabNumbers.DEFAULT? 'information__item information__item--active' :'information__item'}
          onClick={() => {setActiveTab(TabNumbers.DEFAULT);}}
          tabIndex='0'
        >Характеристики
        </li>
        <li
          className={activeTab === TabNumbers.REVIEWS? 'information__item information__item--active' :'information__item'}
          onClick={() => {setActiveTab(TabNumbers.REVIEWS);}}
          tabIndex='0'
        >Отзывы
        </li>
        <li
          className={activeTab === TabNumbers.CONTACTS? 'information__item information__item--active' :'information__item'}
          onClick={() => {setActiveTab(TabNumbers.CONTACTS);}}
          tabIndex='0'
        >Контакты
        </li>
      </ul>
      {changeActiveTab(activeTab)}
    </div>
  );
}

export default Tabs;
