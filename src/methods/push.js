/* Copyright © 2022 @MiraiDevelopment
A simple team of developers who want to bring the best to the future of technology - Owned by GR */
async function push(model, key, value) {

    let fb = require("firebase")
    let db = fb.database()
  
    let result = await db.ref(model+"/"+key).once('value')
        result = result.val()
    if(!Array.isArray(result)) return "reference is not array"
    
    result.push(value)

    let final = db.ref(model+"/"+key).set(result)

    return typeof final !== undefined;
  
}
  
module.exports = push