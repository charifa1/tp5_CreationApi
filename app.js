const fs = require('fs');
const path = require('path');

const keyPath = './openssl/key.pem';
const certPath = './openssl/cert.pem';


const fastify = require('fastify')({ https: { key: fs.readFileSync(keyPath), cert: fs.readFileSync(certPath) } });

const connectDB = require('./database/db');
const routes = require('./routes');

connectDB();

fastify.register(routes);

fastify.listen(3000, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
