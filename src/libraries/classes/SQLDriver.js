const Driver = require('./Driver.js')
const { Sequelize } = require('sequelize')

class SQLDriver extends Driver {
	constructor(options = {}) {
		super()
		this.driver = new Sequelize(options)
	}

	close() {
		this.driver.close()
	}

	async verifyConnectivity() {
		return await this.driver.authenticate()
	}

	async query(query, opts = {}) {
		return await this.driver.query(query, opts)
	}
}

module.exports = SQLDriver
