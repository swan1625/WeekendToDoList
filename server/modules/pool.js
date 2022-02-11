const pg = require('pg');
const Pool = pg.Pool;

const config = {
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 30,
    idleTimeoutMillis: 30000,
};

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('Task connected');
})


pool.on('error', (error) => {
    console.log('pool error', error);
})

module.exports = pool;