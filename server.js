const express = require('express');
const cors = require('cors');
const app = express();
//const path = require('path');

var allowedOrigins = [
    'http://localhost:3000',
    'https://limanchang.onrender.com'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            return callback(
                new Error('Access denied'),
                false
            );
        }
        return callback(null, true);
    }
}));

app.set('port', process.env.PORT || 3001);

app.get('/', (req, res) => {
    console.log('app');
    res.type('html').send(html);
});

app.get('/api', (req, res) => {
    console.log('api');
    const message = [{ test: 'Hello world' }];
    res.json(message);
});

const html = `
<!DOCTYPE html>
<html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello world</h1>
    </body>
</html>
`

/*
app.get('/contacts', (req, res) => {
    const data = [
        {
            id: 'c1',
            title: 'Email Address',
            link: '98changl@gmail.com'
        },
        {
            id: 'c2',
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/liman-chang-579315207/'
        },
        {
            id: 'c3',
            title: 'GitHub',
            link: 'https://github.com/98changl'
        },
        {
            id: 'c4',
            title: 'LeetCode',
            link: 'https://leetcode.com/98changl/'
        },
        {
            id: 'c5',
            title: 'Vimeo',
            link: 'https://vimeo.com/user134202152'
        }
    ];
    res.json(data);
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/files/About Me.pdf'));
});

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, '/files/Resume.pdf'));
});
*/

app.listen(app.get('port'), () => {
    console.log('Server started on port:', app.get('port'));
});