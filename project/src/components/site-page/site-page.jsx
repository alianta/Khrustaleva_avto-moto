import React, { useState } from 'react';
import Logo from '../logo/logo';
import MainNavigation from '../main-navigation/main-navigation';
import AutoCard from '../auto-card/auto-card';
import Footer from '../footer/footer';
import AddReview from '../add-review/add-review';
import {POPUP_CLOSE_BUTTON_ID} from '../../const';

function SitePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onPopUpClose = () => setIsModalOpen(false);
  return (
    <div onClick={(evt)=>{
      if(evt.target.id === POPUP_CLOSE_BUTTON_ID) {
        setIsModalOpen(true);
      }
    }}
    >
      <div className="wrapper">
        <header className="header">
          <Logo/>
          <MainNavigation/>
        </header>
      </div>
      <main>
        <AutoCard/>
      </main>
      <div className="wrapper">
        <Footer/>
      </div>
      {isModalOpen?<AddReview onPopUpClose={()=>onPopUpClose()}/>:''}
    </div>
  );
}

export default SitePage;
