CREATE OR REPLACE DATABASE test;
USE test;

CREATE OR REPLACE TABLE persons (
	id		INT					AUTO_INCREMENT NOT NULL,
	name	VARCHAR(20)								 NOT NULL,
	PRIMARY KEY (id)
);

CREATE OR REPLACE TABLE friends (
	person_a	INT NOT NULL,
	person_b	INT NOT NULL
);

CREATE OR REPLACE TABLE father_son (
	person_a	INT NOT NULL,
	person_b	INT NOT NULL
);

-- lista de personas 
INSERT INTO persons (name)
VALUES
	("Julio Yalord"),
	("Hector Letton"),
	("Elva Gino"),
	("Armando Petardo"),
	("Devora Melboll"),
	("Pedro Pere"),
	("Julio Fish"),
	("Mario Herrera"),
	("Manolo Lope"),
	("Rogelio Prad"),
	("Kiki Palacios"),
	("Juan Junio"),
	("Pablo Suare"),
	("Michel Rodrigue"),
	("Rosario Flore"),
	("Mirta Aguirr"),
	("Viviana Mena"),
	("Alberto Parede"),
	("Miguel Ledesma"),
	("Juana Fuente");

-- amigos
INSERT INTO friends
VALUES 
	(1, 11),
	(2, 12),
	(3, 13),
	(4, 14),
	(5, 15),
	(6, 16),
	(7, 17),
	(8, 18),
	(9, 19),
	(10, 20);

-- padre-hijo
INSERT INTO father_son
VALUES
	(1, 5),
	(1, 6),
	(2, 7),
	(2, 8),
	(3, 9),
	(3, 10),
	(4, 11),
	(4, 12),
	(5, 13),
	(5, 14),
	(6, 15),
	(6, 16),
	(7, 17),
	(7, 18),
	(8, 19),
	(8, 20);
