/* Copyright © 2022 @Mirai Development
A simple team of developers who want to bring the best to the future of technology - Owned by GR */
async function get(model, key, value) {

    let fb = require("firebase")
    let db = fb.database()
  
    let result = await db.ref(model+"/"+key).once("value")
        result = result.val()
    
   return result
      ? { 
        key: key,
        value: result
        }
      : undefined;
  
  }
  
  module.exports = get