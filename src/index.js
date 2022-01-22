// Global Variables
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const docs = require("./methods/docs");
const version = require("../package.json").version
class AoiFB {

  constructor() {

    // Internal Variables
    let set = require("./methods/set");
    let get = require("./methods/get");
    let ping = require("./methods/ping");
    let all = require("./methods/all");
    let deleteData = require("./methods/del");
    

    this.version = version
    this.ping = ping
    this.docs = docs

    this.create = function create(object) {
      try {
      
        const app = initializeApp(object);
        return {
          version: version,
          docs: docs,
          ping: ping,
          set: set,
          get: get,
          all: all,
          del: deleteData
        };
      
      } catch(e) { throw new Error(e) }
    }
  }
 
}

module.exports = new AoiFB