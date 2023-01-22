const { QueryTypes } = require('sequelize')

const queries = {
	GET_TABLES: 'SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = "graph"',
	GET_FIELDS: 'SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = "graph" AND TABLE_NAME = $1',
	GET_PRIMARY_KEYS: 'SELECT * FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE TABLE_SCHEMA = "graph" AND TABLE_NAME = $1 AND CONSTRAINT_NAME = "PRIMARY"',
	GET_FOREIGN_KEYS: 'SELECT * FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE REFERENCED_TABLE_SCHEMA = "graph" AND TABLE_NAME = $1',
}

exports.getTableForeignKeys = async (table, driver) => {
	return driver.query(queries.GET_FOREIGN_KEYS, {
		bind: [table],
		logging: console.log,
		type: QueryTypes.SELECT
	})
}

exports.getTablePrimaryKeys = async (table, driver) => {
	return driver.query(queries.GET_PRIMARY_KEYS, {
		bind: [table],
		logging: console.log,
		type: QueryTypes.SELECT
	})
}

exports.getTableFields = async (table, driver) => {
	return driver.query(queries.GET_FIELDS, {
		bind: [table],
		logging: console.log,
		type: QueryTypes.SELECT
	})
}

exports.getTables = async (driver) => {
	return driver.query(queries.GET_TABLES, {
		logging: console.log,
		type: QueryTypes.SELECT
	})
}

exports.readSchema = (driver) => {
	return driver
}

