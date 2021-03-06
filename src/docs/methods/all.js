/* Copyright © 2022 @MiraiDevelopment
A simple team of developers who want to bring the best to the future of technology - Owned by GR */
class All {

    constructor() {

        this.description = 'Returns all values of the table',
        this.use = 'client.db.db.all(\'table\').then(a => a.map(b => b.key))',
        this.examples = 'https://github.com/MiraiDevelopment/aoi.fb/tree/docs#all'

    }

}

module.exports = new All