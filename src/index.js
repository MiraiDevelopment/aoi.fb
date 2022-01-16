const set = require("./methods/set");
const get = require("./methods/get");
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const all = require("./methods/all");
const deleteData = require("./methods/delete");

class AoiFB {

  constructor() {
    this.version = '1.8.0'

    let pingTime = new Date();
    pingTime.setSeconds(pingTime.getSeconds() - 3);
    const pingms = pingTime.getUTCSeconds();
    this.ping = pingms

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