const { config } = require('../config');

function cacheResponse(res, seconds) {
    if (!config.dev) {
        res.set('Cache-Control', `public, max-ages=${seconds}`);
    }
}

module.exports = cacheResponse;