const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Email sending endpoint
app.use('/', emailRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Routes not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Email service running on http://localhost:${PORT}`);
});


