// Global Variables
const { initializeApp } = require("firebase/app");

const version = require("../package.json").version
const docs = require("./others/docs");
const axios = require("axios");

async function checkVersion() {

  try {
    
    const res = await axios.get("https://aoifb-version.gr14.repl.co/package");

      if (version !== res.data.version) {

        console.warn(
          "\x1b[31maoi.fb warning: \u001b[33mv" +
          res.data.version +
          " is available to install.\u001b[0m - however, requires aoi.js 5.1.0-dev",
        )

      }
      
  } catch {

  }

}
  
class AoiFB {

  constructor() {

    // Internal Variables
    let set = require("./methods/set");
    let get = require("./methods/get");
    let all = require("./methods/all");
    let ping = require("./others/ping");
    let deleteData = require("./methods/delete");
    let argsCount = require("./others/argsCount");
    let isString = require("./others/isString");
    let isNumber = require("./others/isNumber");
    

    this.version = version
    this.ping = ping
    this.docs = docs

    this.Create = function Create(object) {
      try {
      
        const app = initializeApp(object);
        console.log('[ Aoi.fb ] - Firebase initialized!')
        checkVersion()
        console.log('[ Aoi.fb - Support ] - Official Discord Server: https://discord.gg/gNFEMrHshn')
        return {
          version: version,
          ping: ping,
          docs: docs,
          ready: true,
          set: set,
          get: get,
          all: all,
          delete: deleteData,
          argsCount: argsCount,
          isString: isString,
          isNumber: isNumber
        };
      } catch(e) { throw new Error(e) }
    }
  }
 
}

module.exports = new AoiFB