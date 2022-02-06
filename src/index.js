const firebase = require("firebase");
const version = require("../package.json").version
const docs = require("./others/docs");
const { checkVersion } = require("./API.js");

// Internal Variables
let ping = require("./others/ping");
let argsCount = require("./others/argsCount");
let isString = require("./others/isString");
let isNumber = require("./others/isNumber");

class AoiFB {

    constructor() {

        this.version = version
        this.ping = ping
        this.docs = docs

        this.Create = function Create(object) {

            try {

                const app = firebase.initializeApp(object);
                const db = firebase.database()
                

                console.log('[ Aoi.fb ] - Firebase initialized!')
                checkVersion()
                console.log('[ Aoi.fb - Support ] - Official Discord Server: https://discord.gg/GhUZQKRAAf')
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
                        };       
                    }
                
                };
                
            } catch (e) { throw new Error(e) }
        }

    }

}

module.exports = new AoiFB