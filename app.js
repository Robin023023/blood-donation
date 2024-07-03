const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
require('./config/db');
const userBloodPerson = require('./router/route');

app.use(cors());
app.use('/api', userBloodPerson);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (images in this case)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Other middleware and routes...

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Route not found',
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'Something broke',
    });
});

module.exports = app;
