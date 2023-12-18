const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
dotenv.config({ path: './config.env' });
require('./db/connect');
const cors = require('cors');

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(require('./router/auth'));




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
