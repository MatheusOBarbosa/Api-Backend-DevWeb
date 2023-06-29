const dotenv = require('dotenv');

dotenv.config();

const {
    PORT,
    pgConection
} = process.env;

module.exports = {
    port: PORT,
    urlConnection: pgConection
}
