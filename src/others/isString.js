/* Copyright © 2022 @MiraiDevelopment
A simple team of developers who want to bring the best to the future of technology - Owned by GR */
async function isString(model, key) {
    
   let fb = require("firebase")
    let db = fb.database()
  
    let result = await db.ref(model+"/"+key).once("value")
        result = result.val()
    
   return isNaN(result) ? true : false;

}
  
  module.exports = isString