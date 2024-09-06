const express = require('express');
const app = express();
const PORT = process.env.PORT || 8888;

app.get('/api', (req, res) => {
    res.json({ message: 'M. Ngor Seck est un très bon prof informaticien qui explique bien ses cours' });
});

app.listen(PORT, () => {
    console.log(`Mon serveur  backend tourne sur le ${PORT}`);
});
