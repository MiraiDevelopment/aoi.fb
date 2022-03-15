/* Copyright © 2022 @MiraiDevelopment
A simple team of developers who want to bring the best to the future of technology - Owned by GR */
async function update(model, key, value) {

    let fb = require("firebase")
    let db = fb.database()

    let result = db.ref(model + "/" + key).update(value)

    return typeof result !== undefined;

}
module.exports = update