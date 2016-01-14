import React from 'react';
import Header from './Header';

const AppComponent = ({children}) => {
  return (
    <div>
      <Header />
      <div id="content" className="container">{children}</div>
    </div>
  );
}

export default AppComponent;
