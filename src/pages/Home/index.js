import React from 'react';
import client from '../../contentful';
import Card from '../../components/Card';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import Title from '../../components/Title';
import AddButton from '../../components/AddButton';
import { navigate } from '@reach/router';

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 10px 10px 0px 10px;
  background: #333131;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 180px;
    margin-top: 50px;

    .add-btn {
      position: absolute;
      bottom: 0;
    }
  }

  .title {
    margin: 25px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  .riffList {
    margin-top: 35px;
    width: 100%;
    max-height: 70vh;
    overflow: scroll;
  }
`;

const Home = () => {
  const [riffs, setRiffs] = React.useState(null);
  const loginPage = 'https://be.contentful.com/login';

  !riffs ? console.log('Loading..') : console.log('Page loaded');

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'riff',
      })
      .then((entries) => {
        setRiffs(entries.items);
      });
  }, []);

  return (
    <Container>
      <div className='header'>
        <Logo className='logo' />
        <Title className='title' />
        <AddButton
          className='add-btn'
          handleClick={() => navigate(loginPage)}
        />
      </div>
      <section className='riffList'>
        {riffs &&
          riffs.map((riff, i) => {
            return (
              <Card
                key={i}
                riff={i}
                src={riff.fields.image.fields.file.url + `?w=200&h=200`}
                audio={riff.fields.audio.fields.file.url}
                title={riff.fields.title}
                user={riff.fields.user}
              />
            );
          })}
      </section>
    </Container>
  );
};

export default Home;
