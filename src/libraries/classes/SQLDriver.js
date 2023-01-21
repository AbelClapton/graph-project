import { Sequelize } from 'sequelize'

export default class SQLDriver {
	SQLDriver(host, port, database, username, password, dialect) {
		this.driver = new Sequelize(database, username, password, {
			host, port, dialect
		});
	}

	authenticate() {
		this.driver.authenticate()
			.then(res => {
				console.log(JSON.stringify(res))
				return res
			})
			.catch(err => {
				console.log(err.message)
				return err
		})
	}

	query() {

	}
}
