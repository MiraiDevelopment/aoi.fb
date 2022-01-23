const axios = require('axios');

async function checkVersion() {

    try {

        const res = await axios.get("http://node.us1.quizapi.site:25002/package");

        if (version !== res.data.version) {

            console.warn(
                "\x1b[31maoi.fb warning: \u001b[33mv" +
                res.data.version +
                " is available to install.\u001b[0m",
            )

        }

    } catch {

    }

}

module.exports = {
    checkVersion
}