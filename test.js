const SQLDriver = require('./src/libraries/classes/SQLDriver.js')
const { getTables, getTableFields, getTablePrimaryKeys, getTableForeignKeys } = require('./src/utils/SchemaReader.js')
require('dotenv').config()

const driver = new SQLDriver({
	database: process.env.DATABASE_NAME,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT,
	dialect: 'mysql',
})

// use to get the schema models
;(async () => {
	const tables = await getTables(driver)
	const fields = await getTableFields(tables[0].TABLE_NAME, driver)
	const primaryKeys = await getTablePrimaryKeys(tables[1].TABLE_NAME, driver)
	const foreignKeys = await getTableForeignKeys(tables[0].TABLE_NAME, driver)
	// console.log(tables[0])
	// console.log(fields[0])
	// console.log(primaryKeys[0])
	// console.log(foreignKeys[0])
})()
