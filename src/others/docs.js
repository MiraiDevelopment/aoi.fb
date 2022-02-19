/* Copyright © 2022 @Mirai Development
A simple team of developers who want to bring the best to the future of technology - Owned by GR */
const methods = require('../docs/methods.js')
const others = require('../docs/others.js')

class Docs {
    
    constructor() {

        this.methods = methods
        this.others = others

    }
}

module.exports = new Docs