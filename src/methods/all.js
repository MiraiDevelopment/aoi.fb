/* Copyright © 2022 @Mirai Development
A simple team of developers who want to bring the best to the future of technology - Owned by GR */
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
