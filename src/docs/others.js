/* Copyright © 2022 @MiraiDevelopment
A simple team of developers who want to bring the best to the future of technology - Owned by GR */
class Others {

    constructor() {

        // Internal Variables
        let ping = require("./others/ping");
        let reset = require("./others/reset");
        let argsCount = require("./others/argsCount");
        let isNumber = require("./others/isNumber");
        let isString = require("./others/isString");

        this.ping = ping
        this.reset = reset
        this.argsCount = argsCount
        this.isNumber = isNumber
        this.isString = isString

    }

}

module.exports = new Others