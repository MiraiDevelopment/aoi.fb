const set = require("./methods/set");
const get = require("./methods/get");
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const all = require("./methods/all");
const deleteData = require("./methods/delete");
const pingLatency = require("./methods/ping");

class AoiFB {

  constructor() {
    this.version = '1.6.6'
    this.ping = pingLatency
    this.create = function create(object) {
      try {
      
        const app = initializeApp(object);
        return {
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