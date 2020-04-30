import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

const Img = styled.img`
  margin-top: 25px;
`;

const Logo = (props) => {
  return <Img className={props.className} src={logo} alt='logo' />;
};

export default Logo;
