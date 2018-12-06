const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const koalaRouter = require('./routers/koala.router.js');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// app.use('/koalas', koalaRouter);

/** ---------- MONGOOSE CONNECTION ---------- **/
const databaseUrl = 'mongodb://localhost:27017/koalastore'
mongoose.connect(databaseUrl, {useNewUrlParser: true});

mongoose.connection.once('connected', () => {
    console.log('mongoose is connected to:', databaseUrl);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error:', error);
});

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});