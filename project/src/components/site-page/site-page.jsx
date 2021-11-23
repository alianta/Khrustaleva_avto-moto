import React from 'react';
import Logo from '../logo/logo';
import MainNavigation from '../main-navigation/main-navigation';
import AutoCard from '../auto-card/auto-card';
import Footer from '../footer/footer';
import AddReview from '../add-review/add-review';

function SitePage() {
  return (
    <>
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
      <AddReview/>
    </>
  );
}

export default SitePage;
