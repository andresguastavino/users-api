const express = require('express');
const cors = require('cors');
const pretty = require('express-prettify');

const app = express();

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());
app.use(pretty({ query: 'pretty' }));
app.use(express.urlencoded ({ extended: false }));
app.use(express.json());

// ruteos para vistas
// const homeRouter = require('./routes/home');

// app.use('/', homeRouter);

// ruteos para API REST
const apiAllRouter = require('./routes/api/all');
const apiUsersRouter = require('./routes/api/users');

app.use('/api/all', apiAllRouter);
app.use('/api/users', apiUsersRouter);

app.listen(process.env.PORT || 3001, () => {console.log('App is listening on port 3001')});