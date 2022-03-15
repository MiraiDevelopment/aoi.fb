/* Copyright © 2022 @MiraiDevelopment
A simple team of developers who want to bring the best to the future of technology - Owned by GR */
class Methods {

    constructor() {

        // Internal Variables
        let set = require("./methods/set");
        let get = require("./methods/get");
        let all = require("./methods/all");
        let deleteData = require("./methods/delete");

        this.set = set,
        this.get = get,
        this.all = all
        this.delete = deleteData

    }

}

module.exports = new Methods