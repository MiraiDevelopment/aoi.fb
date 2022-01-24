async function ping() {
    const fb = require('firebase');
    
    const db = fb.database();
    
    const initialPing = process.hrtime();
    
    await db.ref('ping').once('value');
    
    const endPing = process.hrtime(initialPing);
    
    return Math.round(((endPing[0] * 1e9) + endPing[1]) / 1e6);
}

module.exports = ping;