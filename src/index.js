/* Copyright © 2022 @Mirai Development
A simple team of developers who want to bring the best to the future of technology - Owned by GR */

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
          " is available to install.\u001b[0m - however, requires \x1b[33maoi.js 5.1.0",
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
        console.log(`\x1b[32m・\x1b[36mMirai Development\x1b[37m || \x1b[32m< \x1b[34mv${version}\x1b[32m > \x1b[37m|| \x1b[32m[ \x1b[36mAoi.fb \x1b[32m] - Firebase initialized!・`)
        checkVersion()
        console.log('\x1b[32m・ [ \x1b[36mMirai Development \x1b[32m] - Official Discord Server:\x1b[37m https://discord.gg/gNFEMrHshn \x1b[32m・')
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
// Copyright © 2022 @Mirai Development