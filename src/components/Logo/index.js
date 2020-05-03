import React from 'react';
import logo from '../../assets/images/logo.svg';

const Logo = (props) => {
  return <img className={props.className} src={logo} alt='logo' />;
};

export default Logo;
