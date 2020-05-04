import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  border: 0;
  background: transparent;
  box-sizing: border-box;
  height: 21px;
  width: 5px;
  position: absolute;
  right: 0px;

  border-color: transparent transparent transparent #e5e5e5;
  transition: 100ms all ease;
  cursor: pointer;

  border-style: solid;
  border-width: 15px 0 15px 15px;

  ${(props) =>
    props.playing &&
    `
    border-style: double;
    border-width: 0px 0 0px 18px;
  `}
`;

const PlayButton = (props) => {
  return (
    <Button className={props.className} onClick={props.handleClick}></Button>
  );
};
export default PlayButton;
