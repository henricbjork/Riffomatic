import React from 'react';
import client from '../../contentful';
import Card from '../../components/Card';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import Title from '../../components/Title';
import Button from '../../components/Button';

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 10px 10px 0px 10px;
  background: #333131;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .logo {
    margin-top: 25px;
  }
  .title {
    margin: 25px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .riffList {
    width: 100%;
    height: 430px;
    padding: 10px;
    overflow: scroll;
    position: absolute;
    bottom: 0;
  }
`;

const Home = () => {
  const [riffs, setRiffs] = React.useState(null);

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
      <Logo className='logo' />
      <Title className='title' />
      <a href='https://be.contentful.com/login'>
        <Button addRiffBtn={true}>Add</Button>
      </a>
      <section className='riffList'>
        {riffs &&
          riffs.map((riff, i) => {
            return (
              <Card
                key={i}
                riff={i}
                src={riff.fields.image.fields.file.url}
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
