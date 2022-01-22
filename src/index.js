// Global Variables
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const version = require("../package.json").version
const docs = require("./methods/docs");
class AoiFB {

  constructor() {

    // Internal Variables
    let ping = require("./methods/ping");
    let set = require("./methods/set");
    let get = require("./methods/get");
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
          ping: ping,
          docs: docs,
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