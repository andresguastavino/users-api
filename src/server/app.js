const express = require('express');
const cors = require('cors');
const pretty = require('express-prettify');
const path = require('path');

const app = express();
app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());
app.use(pretty({ query: 'pretty' }));
app.use(express.static(path.join(__dirname, '../../build')));
app.use(express.urlencoded ({ extended: false }));
app.use(express.json());

// ruteos para vistas
const homeRouter = require('./routes/home');

app.use('/', homeRouter);

// ruteos para API REST
const apiIndexRouter = require('./routes/api/index');
const apiAllRouter = require('./routes/api/all');
const apiUsersRouter = require('./routes/api/users');

app.use('/api', apiIndexRouter);
app.use('/api/all', apiAllRouter);
app.use('/api/users', apiUsersRouter);
app.use('/api/*', (req, res) => {
    res.status(404).json({
        status: 'error',
        statusCode: 404,
        message: 'not found'
    });
})

app.listen(process.env.PORT || 3001, () => {console.log('App is listening on port 3001')});