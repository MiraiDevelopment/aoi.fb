const fb = require('firebase');

const db = fb.database();

async function all(model, { filter } = { filter: (data) => data }) {
    const dbData = await db.ref(model).once('value').then(res => res.val());
    
    const result = Object.entries(dbData || {});
    
    return result.map(([key, value]) => {
        const filterData = { key, data: { key, value } };
        
        return filter(filterData) ? filterData : false;
    }).filter(e => e);
};

module.exports = all;