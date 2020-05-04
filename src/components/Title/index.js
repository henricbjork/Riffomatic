import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-family: sans-serif;
  font-style: normal;
  font-size: 28px;
  letter-spacing: 1.5px;
  color: #fff;
  text-transform: uppercase;
`;

const Title = (props) => {
  return <H1 className={props.className}>Riffomatic</H1>;
};

export default Title;
