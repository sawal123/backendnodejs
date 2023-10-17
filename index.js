
const express = require('express');
const app = express();

const userRoutes = require('./src/router/router');
app.use(express.json());

const port = 4000
app.use('/api', userRoutes);
app.listen(port,() => {
    console.log(`Server run in http://localhost:${port}`);
})
