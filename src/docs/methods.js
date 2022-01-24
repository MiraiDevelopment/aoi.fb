class Methods {

    constructor() {

        // Internal Variables
        let ping = require("./others/ping");
        let set = require("./methods/set");
        let get = require("./methods/get");
        let all = require("./methods/all");
        let deleteData = require("./methods/del");

        this.set = set,
        this.get = get,
        this.all = all
        this.del = deleteData

    }

}

module.exports = new Methods