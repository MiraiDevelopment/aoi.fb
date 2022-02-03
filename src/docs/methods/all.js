class All {

    constructor() {

        this.description = 'Returns all values of the table',
        this.use = 'client.db.db.all(\'table\').then(a => a.map(b => b.key))',
        this.examples = 'https://github.com/aoifb/aoi.fb#all'

    }

}

module.exports = new All