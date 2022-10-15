require('dotenv').config({ path: __dirname + '/./../../../.env'});

module.exports = {
    development: {
        username: process.env.DATA_BASE_USER,
        password: process.env.DATA_BASE_PASSWORD,
        database: process.env.DATA_BASE_NAME,
        host: process.env.DATA_BASE_HOST,
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: true
        },
        timezone: '-03:00'
    }
}