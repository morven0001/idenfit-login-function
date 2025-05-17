const axios = require('axios');

module.exports = async () => {
  const response = await axios.get('https://integration.idenfit.com/login', {
    params: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    }
  });
  return response.data.token;
};
