const fs = require('fs');
const express = require('express');

const path = require('path');
const publicPath = path.resolve('./public');

const cors = require('cors');
const pretty = require('express-prettify');

const app = express();
app.use(cors());
app.use(pretty({ query: 'pretty' }));
app.use(express.static(publicPath));
app.use(express.urlencoded ({ extended:false }));
app.use(express.json());

// ruteos para vistas
const homeRouter = require('./routes/home');

app.get('/', homeRouter);
app.get('/home', homeRouter);

// app.get('/home', (req, res) => {
//     res.sendFile(path.resolve('public/index.html'));
// });

// ruteos para API REST
const apiAllRouter = require('./routes/api/all');
const apiUsersRouter = require('./routes/api/users');

app.use('/api/all', apiAllRouter);
app.use('/api/users', apiUsersRouter);

// app.get('/api/all', (req, res) => {
//     const response = {
//         count: usersData.length,
//         results: usersData
//     }

//     res.header("Content-Type", 'application/json');
//     res.json(response);
// });

// const getUnvalidatedRespone = (page) => {
//     const usersPerPage = 10;
//     const limitMin = 0 + (page * 10);
//     const limitMax = (page * 10) + usersPerPage > usersData.length ? usersData.length : (page * 10) + usersPerPage;

//     const results = [];
//     for(let i = limitMin; i < limitMax; i++) {
//         usersData[i] && results.push(usersData[i]);
//     }

//     return {
//         count: usersData.length,
//         page,
//         results
//     };
// }

// const getValidatedResponse = (page) => {
//     // Preventing negative numbers to be used
//     const firstPage = 0;
//     page = page >= firstPage ? page : firstPage;
//     // Preventing page index greater than total num of users
//     const lastPage = Math.floor(usersData.length / 10);
//     page = page > lastPage ? lastPage : page;

//     const usersPerPage = 10;
//     const limitMin = 0 + (page * 10);
//     const limitMax = (page * 10) + usersPerPage > usersData.length ? usersData.length : (page * 10) + usersPerPage;

//     const results = [];
//     for(let i = limitMin; i < limitMax; i++) {
//         results.push(usersData[i]);
//     }
    
//     return {
//         count: usersData.length,
//         page,
//         results
//     };
// }

// app.get('/api/users', (req, res) => {
//     const page = req.query.page !== undefined ? parseInt(req.query.page) : 0;
//     const validate = req.query.validated === '';
//     const response = validate ?  getValidatedResponse(page) : getUnvalidatedRespone(page);

//     res.header("Content-Type", 'application/json');
//     res.json(response);
// });

app.listen(3000, () => {console.log('App is listening on port 3000')});