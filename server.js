const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware untuk melayani file statis
app.use(express.static(path.join(__dirname, 'public')));

// Rute untuk file HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});