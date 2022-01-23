const firebase = require("firebase");
const { version } = require("../package.json");
const { checkVersion } = require("./API.js");

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

            try {

                const app = firebase.initializeApp(object);
                const db = firebase.database()

                console.log('[ Aoi.fb ] - Firebase initialized!')
                checkVersion()
                return {
                    table: class table {
                        constructor(x) {
                            this.table = x
                        }

                        set(key, value) {
                            let result = db.ref(this.table + "/" + key).set(value)
                            return typeof result !== undefined;
                        }

                        async get(key) {
                            let result = await db.ref(this.table + "/" + key).once("value")
                                result = result.val()

                            return result
                                ? {
                                    key: key,
                                    value: result,
                                }
                                : undefined;
                        }

                        delete() {
                            console.log("d")
                        }

                        async all() {

                            let result = await db.ref(this.table + "/").once("value")
                                result = result.val()
                                result = Object.entries(result || {})

                            let a = []

                            for (let i = 0; i < result.length; i++) {

                                const doc = result[i]

                                const x = { key: doc[0], value: doc[1] };

                                a.push(x);

                            }
                            
                            return a
                        }
                    }
                };

            } catch (e) { throw new Error(e) }

        }

    }

}

module.exports = new AoiFB