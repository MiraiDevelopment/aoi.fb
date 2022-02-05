async function isString(model, key) {
    
   let fb = require("firebase")
    let db = fb.database()
  
    let result = await db.ref(model+"/"+key).once("value")
        result = result.val()
    
   return isNaN(result) ? true : false;

}
  
  module.exports = isString