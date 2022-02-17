async function all(model, { filter } = { filter: (data) => data }) {
    const database = require('firebase').database();
    const dbData = await db.ref(model).once('value').then(res => res.val());

    const result = Object.entries(dbData || {});
    
    return  result.reduce((acc, [key, value]) => {
        if(value) {
          const filterData = { key, data: { key, value } };
          if(filter(filterData)) acc.push(filterData);
        };
        /*Dessa forma, só há 1 loop da outra forma há 2 loop, isso é uma má prática e má otimização do código espero ter ajudado.*/
        return acc;
    }, [])
};

module.exports = all;
