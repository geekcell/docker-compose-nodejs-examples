const express = require('express');
const {createClient} = require("redis");

const app = express();
const port = 3000;

const client = createClient({
    url: 'redis://db:6379'
});

client.on('error', err => console.log('Redis Client Error', err));
(async() => { await client.connect(); })();

app.get('/', async (req, res) => {
    let body = '';
    await client.set('foo', 'bar');
    body += 'Write value "bar" to key "foo"... ';

    const bar = await client.get('foo');
    body += `Read key "foo", got value "${bar}".`;

    res.send(body);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});