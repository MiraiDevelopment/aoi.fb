const deleteData = require("./methods/delete");
const set = require("./methods/set");
const get = require("./methods/get");
const { initializeApp } = require("firebase/app");

function create(object) {

  try {
  
    const app = initializeApp(object);

    return {
      set: set,
      get: get,
      delete: deleteData
    };

  } catch(e) { throw new Error(e) }
  
  
  
}

module.exports = {
  create
};
