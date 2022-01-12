const set = require("./methods/set");
const get = require("./methods/get");
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const all = require("./methods/all");
const deleteData = require("./methods/delete");

function create(object) {

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

module.exports = {
  create
};