const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_API_KEY,
});

export default client;
