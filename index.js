const fs = require('fs');
const express = require('express');
const cors = require('cors');
const path = require('path');
const pretty = require('express-prettify');
const { response } = require('express');

const app = express();
app.use(
	cors({
		credentials: true,
		origin: true
	})
);
app.options('*', cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(pretty({ query: 'pretty' }));

const usersData = JSON.parse(fs.readFileSync('public/users.json', 'utf8'));

app.get('/api/all', (req, res) => {
    const response = {
        count: usersData.length,
        results: usersData
    }

    res.header("Content-Type", 'application/json');
    res.json(response);
});

app.get('/api/users', (req, res) => {
    let page = req.query.page || 0;
    // Preventing negative numbers to be used
    const firstPage = 0;
    page = page >= firstPage ? page : firstPage;
    // Preventing page index greater than total num of users
    const lastPage = Math.floor(usersData.length / 10);
    page = page > lastPage ? lastPage : page;

    const usersPerPage = 10;
    const limitMin = 0 + (page * 10);
    const limitMax = (page * 10) + usersPerPage > usersData.length ? usersData.length : (page * 10) + usersPerPage;

    const results = [];
    for(let i = limitMin; i < limitMax; i++) {
        results.push(usersData[i]);
    }
    
    const response = {
        count: usersData.length,
        page,
        results
    }

    res.header("Content-Type", 'application/json');
    res.json(response);
});

app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});

app.get('/home', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

app.listen(3000, () => {console.log('App is listening on port 3000')});