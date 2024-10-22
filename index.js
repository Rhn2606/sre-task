const express = require('express');
const app = express();

app.use(express.json());

const studentsRouter = require('./routes/api/v1/students');

app.use('/api/v1/students', studentsRouter);

app.get('/api/v1/healthcheck', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
