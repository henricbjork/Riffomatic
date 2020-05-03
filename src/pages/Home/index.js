import React from 'react';
import client from '../../contentful';
import Card from '../../components/Card';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import Title from '../../components/Title';
import Button from '../../components/Button';

const Container = styled.div`
  height: 660px;
  width: 370px;
  padding: 10px 10px 0px 10px;
  background: #3e3b3b;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    margin-top: 25px;
  }
  .title {
    margin: 25px;
  }
  .riffList {
    margin-top: 20px;
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
`;

const Home = () => {
  const [riffs, setRiffs] = React.useState(null);

  if (!riffs) {
    console.log('loading');
  }

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
      <Button addRiffBtn={true}>
        <a href='https://be.contentful.com/login'>Add</a>
      </Button>
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
