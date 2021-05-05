import React, { Component } from 'react';
import GAPLogo from '../../../Assets/gap-logo.svg';
import './Header.css';

class Header extends Component {
  render () {
    return (
      <header className="header">
        <img src={GAPLogo} alt="GAP Logo" className="header__logo" />
        <h1>gic GAP goe Game</h1>
      </header>
    );
  }
}

export default Header;
