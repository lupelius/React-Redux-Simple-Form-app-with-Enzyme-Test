import React from 'react';
import './style.scss';

const Header = (props) => {
  return (
    <header data-test="header">
      <div className="wrapper">
        <div className="logo">
           <h1 data-test="logo-svg"><span>React Redux Simple Form app with Enzyme</span></h1>
        </div>
      </div>
    </header>
  )
}

export default Header;