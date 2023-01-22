-- MySQL
-- Get Databases
SELECT *
FROM information_schema.tables
WHERE table_type = 'TABLE_BASE';

-- Get tables from database
SHOW TABLES
FROM 'database';

-- Get columns from table
SELECT *
FROM information_schema.COLUMNS
WHERE
	table_schema = '<DATABASE>' AND
	table_name = '<TABLE_NAME>';

-- Get primary key from table
SELECT *
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
	TABLE_SCHEMA = '<DATABASE>' AND
	TABLE_NAME = '<TABLE_NAME>' AND
	CONSTRAINT_NAME = 'PRIMARY';

-- Get foreign keys from table
SELECT *
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
	REFERENCED_TABLE_SCHEMA = '<DATABASE>' AND
	REFERENCED_TABLE_NAME = '<TABLE_NAME>';
