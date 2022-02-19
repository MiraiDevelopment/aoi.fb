/* Copyright © 2022 @Mirai Development
A simple team of developers who want to bring the best to the future of technology - Owned by GR */
async function set(model, key, value) {

    let fb = require("firebase")
    let db = fb.database()
  
    let result = db.ref(model+"/"+key).set(value)
    
    return typeof result !== undefined;
  
  }
  
  module.exports = set