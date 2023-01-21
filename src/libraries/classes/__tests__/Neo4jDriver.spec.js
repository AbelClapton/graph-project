import { config } from 'dotenv'
import Neo4jDriver from '../Neo4jDriver.js'

let neo4jDriver

describe('01. Initiate Driver', () => {
	beforeAll(() => config())
	afterAll(() => neo4jDriver.close())

	it('Should create a driver instance and connect to server', () => {
		const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = process.env

		expect(NEO4J_URI).toBeDefined()
		expect(NEO4J_USERNAME).toBeDefined()
		expect(NEO4J_PASSWORD).toBeDefined()

		neo4jDriver = new Neo4jDriver(NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD)
	})

	it('Driver has been instantiated', () => {
		expect(neo4jDriver.driver).toBeDefined()
		expect(neo4jDriver.driver.constructor.name).toEqual('Driver')
	})

	it('Driver can verify connectivity', () => {
		const driver = neo4jDriver.driver
		expect(driver).toBeDefined()
		expect(driver.constructor.name).toEqual('Driver')

		driver
			.verifyConnectivity()
			.then(() => {
				expect(true).toEqual(true)
			})
			.catch((e) => {
				expect(e).toBeUndefined()
			})
	})
})
