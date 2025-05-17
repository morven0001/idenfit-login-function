const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/getToken', async (req, res) => {
  try {
    const response = await axios.get('https://integration.idenfit.com/login', {
      params: {
        username: 'zehraauludag@gmail.com', // ⚠️ Sonra GitHub Secrets'a taşıyacağız
        password: 'Zehra.1992'
      }
    });
    res.json({ token: response.data.token });
  } catch (error) {
    res.status(500).json({ error: "Token alınamadı" });
  }
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}/getToken`));
