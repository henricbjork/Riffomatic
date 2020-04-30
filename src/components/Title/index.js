import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-family: roboto;
  font-style: normal;
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
`;

const Title = (props) => {
  return <H1 className={props.className}>Riffomatic</H1>;
};

export default Title;
