import React from 'react';
import Logo from '../logo/logo';
import MainNavigation from '../main-navigation/main-navigation';

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
      </main>
    </>
  );
}

export default SitePage;
