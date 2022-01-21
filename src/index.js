const set = require("./methods/set");
const get = require("./methods/get");
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const ping = require("./methods/ping");
const all = require("./methods/all");
const deleteData = require("./methods/delete");
const version = "1.8.2"
class AoiFB {

  constructor() {
    this.version = version
    this.ping = ping

    this.create = function create(object) {
      try {
      
        const app = initializeApp(object);
        return {
          version: version,
          ping: ping,
          set: set,
          get: get,
          all: all,
          delete: deleteData
        };
      
      } catch(e) { throw new Error(e) }
    }
  }
 
}

module.exports = new AoiFB