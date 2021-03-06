import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
  position: relative;
  height: 55px;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 3px;
  transition: background-color 0.1s ease;

  &:hover {
    background: #666666;
  }

  ${(props) =>
    props.active &&
    `
    background: #666666;
    `}}

  p {
    color: #C4C4C4;
  }

  .card__image {
    width: 55px;
    height: 55px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
}

    .card__content {
        margin-left: 10px;
        h4{
        color: #FFF;
        }
    }
  }
`;

const Card = (props) => {
  const [isPlaying, setPlaying] = React.useState(false);

  return (
    <CardStyled
      active={isPlaying}
      onClick={() => {
        const audio = document.getElementsByClassName('riff')[props.riff]; // querySelector doesn't seem to work
        audio.onended = () => {
          setPlaying(isPlaying);
        };
        isPlaying ? audio.pause() : audio.play();
        setPlaying(!isPlaying);
      }}
    >
      <div className='card__image'>
        <img src={props.src} alt='' />
      </div>
      <div className='card__content'>
        <h4>{props.title}</h4>
        <p>{props.user}</p>
      </div>
      <audio className='riff' src={props.audio} muted={!isPlaying}></audio>
    </CardStyled>
  );
};

export default Card;
