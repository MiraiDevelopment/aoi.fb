async function all(model, { filter } = { filter: (data) => data }) {
    const db = require('firebase').database();
    const dbData = await db.ref(model).once('value').then(res => res.val());

    const result = Object.entries(dbData || {});
    
    return  result.reduce((acc, [key, value]) => {
        if(value) {
          const filterData = { key, data: { key, value } };
          if(filter(filterData)) acc.push(filterData);
        };
        return acc;
    }, [])
};

module.exports = all;
