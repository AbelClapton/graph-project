# graph-project

## Overview
> Project description here

> Index

## Install
Clone the repo:
```bash
git clone https://github.com/AbelClapton/graph-project.git
```

Install dependencies:
```
yarn install
```

Run project:
```
yarn dev
```

Run tests:
```
yarn test
```


## Project dependencies:
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

