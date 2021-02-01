import React from 'react'

import SideBar from './components/SideBar'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <div className="c-app">
      <SideBar />

      <div className="c-wrapper">
        <Header />
        <div className="c-body">
          <Main />
        </div>
        <div className="c-footer d-flex flex-column align-items-end justify-content-center">
          <div>© IT Promocodes, 2019</div>
        </div>
      </div>
    </div>
  );
};

export default App;
