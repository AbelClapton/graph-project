import Driver from './Driver.js'
import neo4j from 'neo4j-driver'

export default class Neo4jDriver extends Driver {
	constructor(uri, username, password) {
		super()
		this.driver = neo4j.driver(
			uri,
			neo4j.auth.basic(
				username,
				password
			)
		)
	}

	async verifyConnectivity() {
		await this.driver.verifyConnectivity()
	}

	close() {
		this.driver.close()
	}
}
