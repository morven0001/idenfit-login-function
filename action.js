const axios = require('axios');

async function getToken() {
  try {
    const response = await axios.get('https://integration.idenfit.com/login', {
      params: {
        username: process.env.IDENFIT_USERNAME,
        password: process.env.IDENFIT_PASSWORD
      }
    });
    return response.data.token;
  } catch (error) {
    console.error('Token alınamadı:', error.message);
    throw error;
  }
}

module.exports = { getToken };
