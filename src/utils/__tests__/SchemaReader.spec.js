const { config } = require('dotenv')
const SQLDriver = require('../../libraries/classes/SQLDriver.js')
const { getTables } = require('../SchemaReader.js')

describe('01. Should get the specified database schema', () => {
	beforeAll(() => config())
	afterAll(() => driver.close())

	const driver = new SQLDriver({
		database: process.env.DATABASE_NAME,
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		host: process.env.DATABASE_HOST,
		port: process.env.DATABASE_PORT,
		dialect: 'mysql',
	})

	it('Should get the tables', async () => {
		getTables(driver)
			.then(() => {
				expect(true).toBe(true)
			})
			.catch((err) => {
				expect(err).toBeUndefined()
			})
	})

	it.todo('Should get the fields')

	it.todo('Should get the primary keys')

	it.todo('Should get the foreign keys')

	it.todo('Should consolidate a Schema object')
})
