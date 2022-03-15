/* Copyright © 2022 @MiraiDevelopment
A simple team of developers who want to bring the best to the future of technology - Owned by GR */
async function argsCount(model, key) {

    let fb = require("firebase")
    let db = fb.database()

    let result = await db.ref(model+"/"+key).once("value")
        result = result.val()

   return result.length || 0
}
  
module.exports = argsCount