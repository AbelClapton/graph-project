# graph-project

## Overview
> Project description here

> Index

## Requirements
- mysql

## Install
###### Clone the repo:
```bash
git clone https://github.com/AbelClapton/graph-project.git
```

###### Enter the project directory
```
cd graph-project
```

###### Install dependencies:
```
yarn install
```

###### Populate the dev database:
There are two ways to achieve this. You can:
- Copy the contents of `/src/queries/relational/init.sql` into your MySQL editor.

- Run this script in the command line under the project directory. See Running scripts to the database before using this
	```
	yarn mysql:init
	```

###### Run project:
```
yarn dev
```

###### Create a graph user in mysql
- For linux:
	```bash
	sudo mysql < ./src/utils/queries/relational/enableScripts.sql
	```

###### Populate the database
If you did the previous step you can run the init query
(See running scripts to the database below)
```
yarn 'mysql:init'
```

Otherwise copy the contents of `/src/utils/queries/relational/init.sql` into your
MySQL Editor/Client

###### Running scripts to the database:
Example:
```
yarn 'mysql:init'
```

Runnable scripts are defined in the scripts section in package.json.
Queries can be found in the `src/utils/queries` folder.

Note: 
For this you need to create a 'graph' user with 'graph' password to enable
running scripts to the test database. Otherwise just copy and paste them into your editor client.

Run tests:
```
yarn test
```
Note: Tests for the SQLDriver will fail if the database is not populated.

## NPM dependencies:
##### App dependencies:
- express: Backend framework.
- sequelize: Multi-dialect ORM driver for SQL.
	- mysql2: Dialect driver.
- neo4j-driver

##### Dev dependencies:
- jest: Unit testing framework.
- eslint + prettier: For code consistency.
- nodemon: Automatic on change server reload.

## Some implementation ideas
- Make a driver hierarchy through some Factory Pattern?
- Proggresively migrate to Typescript
- Break this doc into issues/wiki docs
- Make a section for useful links and resources

##### Functionality Needed:
- Schema: Universal schema model which can be translated into a specific schema

- SchemaReader: 
	Mechanism to extract the schema information from a relational database

- SchemaParser:
	Mechanism to parse a schema model into the specified schema

- Logger:
	Application logger

## Roadmap
Insert long term objectives map :v

## Todo

##### Make connections:
Relational DBMS:
- [ ] MySQL*
- [ ] PostgreSQL

Graph DBMS:
- [x] Neo4j*
- [ ] ArangoDB

##### Extract data from RDBMS:
1. Get DB Schema
2. Do transformations

###### Testing methods:
1. Direct HTTPS requests (Imitating api calls)
2. Send data to client and recieve the transformations from it (More agile tests)

Done for:
- [ ] MySQL*
- [ ] Postgres

###### Export data to GDBMS
1. Parse data to graph model schema
2. Send query to the GDBMS

Done for:
- [ ] Neo4j*
- [ ] ArangoDB

(*) Steps for minimal project setup
###### Testing:
1. Log recieved and parsed data
2. Log query request and response

