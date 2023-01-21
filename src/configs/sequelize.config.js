import { Sequelize } from 'sequelize'

// See https://sequelize.org/api/v6/class/src/sequelize.js~Sequelize.html#instance-constructor-constructor
export const createConnection = (config = {
	host:  'localhost',
	port: 3306,
	database: 'test',
	username: 'root',
	password: 'root',
	dialect: 'mysql2'
}) => {
	// HACK: Must be a better way
	return new Sequelize(config.database, config.username, config.password, {
		host: config.host,
		port: config.port,
		dialect: config.dialect
	})
}
