import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  width: 114px;
  height: 37px;
  background: #ffcf55;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  transition: 0.1s;
  color: white;

  &:hover {
    height: 38px;
    width: 117px;
    font-size: 15px;
    background: #ffd978;
  }
`;

const AddButton = (props) => {
  return (
    <Button className={props.className} onClick={props.handleClick}>
      Add
    </Button>
  );
};

export default AddButton;
