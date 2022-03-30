const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

/* TODO:
The login page seems to work well enough but the formatting does not load in properly through the server. Fix this in the near future
*/
app.get('/', function (req, res) {
    res.sendFile(`${base}/login_page.html`);
});

app.get('/register-device', (req, res) => {
    res.sendFile(`${base}/register_student.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${base}/Error.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
