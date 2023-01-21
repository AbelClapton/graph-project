import Driver from './Driver.js'
import { Sequelize } from 'sequelize'

export default class SQLDriver extends Driver {
	constructor(options = {}) {
		super()
		this.driver = new Sequelize(options);
	}

	close() {
		this.driver.close()
	}

	async verifyConnectivity() {
		return await this.driver.authenticate()
	}
}
