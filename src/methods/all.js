async function all(model, { filter } = {}) {

    let fb = require("firebase")
    let db = fb.database()

    if (typeof filter === "function") {

        let result = await db.ref(model + "/").once("value")
            result = result.val()
            result = Object.entries(result || {})

        let a = []

        for (let i = 0; i < result.length; i++) {

            const doc = result[i]

            const x = { key: doc[0], data: { key: doc[0], value: doc[1] } };

            if (filter(x)) a.push(x);

        }

        return a

    } else {

        let result = await db.ref(model + "/").once("value")
            result = result.val()
            result = Object.entries(result || {})

        let a = []

        for (let i = 0; i < result.length; i++) {

            const doc = result[i]

            const x = { key: doc[0], data: { key: doc[0], value: doc[1] } };

            a.push(x);

        }

        return a

    }

}

module.exports = all
