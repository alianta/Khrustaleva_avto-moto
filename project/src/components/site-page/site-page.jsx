import React from 'react';
import Logo from '../logo/logo';
import MainNavigation from '../main-navigation/main-navigation';
import AutoCard from '../auto-card/auto-card';

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
    </>
  );
}

export default SitePage;
