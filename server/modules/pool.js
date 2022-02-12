const pg = require('pg');
// const pool = pg.Pool;

const config = {
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 30,
    idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log("connected to postgres");
})


pool.on('error', (err) => {
    console.log("error connecting to postgres", err);
})

module.exports = pool;