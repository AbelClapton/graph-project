import { config } from 'dotenv'
import SQLDriver from '../SQLDriver.js'

let driver

describe('01. Initiate Driver', () => {
	beforeAll(() => config())
	afterAll(() => driver.close())

	it('Should create a driver instance and connect to server', () => {
		const {
			DATABASE_NAME,
			DATABASE_HOST,
			DATABASE_PORT,
			DATABASE_USERNAME,
			DATABASE_PASSWORD,
		} = process.env

		expect(DATABASE_NAME).toBeDefined()
		expect(DATABASE_HOST).toBeDefined()
		expect(DATABASE_PORT).toBeDefined()
		expect(DATABASE_USERNAME).toBeDefined()
		expect(DATABASE_PASSWORD).toBeDefined()

		driver = new SQLDriver({
			database: DATABASE_NAME,
			username: DATABASE_USERNAME,
			password: DATABASE_PASSWORD,
			host: DATABASE_HOST,
			port: DATABASE_PORT,
			dialect: 'mysql',
		})
	})

	it('should have been instantiated', () => {
		expect(driver.driver).toBeDefined()
		expect(driver.driver.constructor.name).toEqual('Sequelize')
	})

	it('Should verify connectivity', () => {
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
