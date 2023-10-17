
const express = require('express');
const app = express();
const cors = require('cors'); // Impor middleware CORS

const userRoutes = require('./src/router/router');
app.use(express.json());

const corsOptions = {
    origin: 'http://example.com', // Ganti dengan asal yang diizinkan
    methods: 'GET,POST', // Metode yang diizinkan
    allowedHeaders: 'Content-Type,Authorization', // Tautan header yang diizinkan
  };


const port = 4000
app.use('/api', cors(corsOptions), userRoutes);
app.listen(port,() => {
    console.log(`Server run in http://localhost:${port}`);
})
