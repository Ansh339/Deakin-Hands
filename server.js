const express = require('express');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

/* TODO:
The login page seems to work well enough but the formatting does not load in properly through the server. Fix this in the near future
*/
app.get('/', function (req, res) {
    res.sendFile(`${base}/login_page.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${base}/Error.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});