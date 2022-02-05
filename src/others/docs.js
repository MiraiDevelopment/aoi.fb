const methods = require('../docs/methods.js')
const others = require('../docs/others.js')

class Docs {
    
    constructor() {

        this.methods = methods
        this.others = others

    }
}

module.exports = new Docs