// user-service/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('User Service is Running');
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
