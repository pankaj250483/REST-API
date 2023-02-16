require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/', routes)

/*
app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})
*/
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));