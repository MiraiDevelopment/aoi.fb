async function del(model, key, value) {

    const fb = require("firebase");
    const db = fb.database();
  
    const result = db.ref(model+"/"+key).remove();
    
    return typeof result !== undefined;
  
}
  
module.exports = del