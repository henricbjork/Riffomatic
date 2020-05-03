import styled from 'styled-components';

const Button = styled.div`
  ${(props) =>
    props.playBtn &&
    `
  border: 0;
  background: transparent;
  box-sizing: border-box;
  height: 21px;
  width: 5px;
  position: absolute;
  right: 0px;

  border-color: transparent transparent transparent #E5E5E5;
  transition: 100ms all ease;
  cursor: pointer;

  border-style: solid;
  border-width: 15px 0 15px 15px;

  
  `}

  ${(props) =>
    props.playing &&
    `
    border-style: double;
    border-width: 0px 0 0px 18px;
  `}

  ${(props) =>
    props.addRiffBtn &&
    `
    width: 104px;
    height: 32px;
    background: #FFCF55;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: .13s;

    &:hover {
      height: 35px;
      width: 110px;
      font-size: 15px;
      background: #FFD978;
    }
  `}

`;
export default Button;
