/* Copyright © 2022 @Mirai Development
A simple team of developers who want to bring the best to the future of technology - Owned by GR */
class All {

    constructor() {

        this.description = 'Returns all values of the table',
        this.use = 'client.db.db.all(\'table\').then(a => a.map(b => b.key))',
        this.examples = 'https://github.com/aoifb/aoi.fb#all'

    }

}

module.exports = new All