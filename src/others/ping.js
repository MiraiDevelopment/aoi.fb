async function ping() {
    let fb = require('firebase');

    let db = fb.database();

    let initialPing = process.hrtime();

    await db.ref('ping').once('value');

    let endPing = process.hrtime(initialPing);

    return Math.round(((endPing[0] * 1e9) + endPing[1]) / 1e6);
}

module.exports = ping;