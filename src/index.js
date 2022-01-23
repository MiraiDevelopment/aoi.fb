const { initializeApp } = require("firebase/app");
const { version } = require("../package.json");
const { checkVersion } = requrie("./API.js");

// Internal Variables
//let ping = require("./methods/ping");
let set = require("./methods/set");
let get = require("./methods/get");
let all = require("./methods/all");
let deleteData = require("./methods/del");

class AoiFB {

    constructor() {

        this.version = version;

        this.create = function create(object) {

            

        }

    }

}

module.exports = new AoiFB