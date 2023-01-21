-- MySQL
-- Get Databases
SELECT *
FROM information_schema.tables
WHERE table_type = 'TABLE_BASE';

-- Get tables from database
SHOW TABLES
FROM 'database'

-- Get columns from table
SELECT *
FROM information_schema.COLUMNS
WHERE
	table_schema = '<DATABASE>' AND
	table_name = '<TABLE_NAME>'	

-- Get primary key from table
SHOW KEYS
FROM <TABLE>
WHERE key_name = 'PRIMARY'

-- Get foreign keys from table
SELECT *
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
	REFERENCED_TABLE_SCHEMA = '<DATABASE>' AND
	REFERENCED_TABLE_NAME = '<TABLE_NAME>'
