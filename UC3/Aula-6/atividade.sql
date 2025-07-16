CREATE DATABASE avaliação;

USE avaliação;

CREATE TABLE grupos(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome_grupo VARCHAR(80) NOT NULL
);

CREATE TABLE jogadores(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(80) NOT NULL,
    id_grupo INT NOT NULL,
    FOREIGN KEY (id_grupo) REFERENCES grupos(id)
    ON DELETE CASCADE ON UPDATE CASCADE
);

ALTER TABLE jogadores ADD COLUMN
posicao INT NOT NULL;

CREATE TABLE jogos(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome_jogo VARCHAR(80) NOT NULL
);

CREATE TABLE partidas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_jogo INT NOT NULL,
    jogador1_id INT NOT NULL,
    jogador2_id INT NOT NULL,
    jogador3_id INT NOT NULL,
    jogador4_id INT NOT NULL,
    vencedor_id INT NOT NULL,
    data_partida DATE NOT NULL,
    FOREIGN KEY (id_jogo) REFERENCES jogos(id),
    FOREIGN KEY (jogador1_id) REFERENCES jogadores(id),
    FOREIGN KEY (jogador2_id) REFERENCES jogadores(id),
    FOREIGN KEY (jogador3_id) REFERENCES jogadores(id),
    FOREIGN KEY (jogador4_id) REFERENCES jogadores(id),
    FOREIGN KEY (vencedor_id) REFERENCES jogadores(id)
);

DROP TABLE partidas;

INSERT INTO grupos (nome_grupo)
VALUES 
('Smurfs'),
('Enner Valencia'),
('Capivaras Assasinas'),
('Nepal');

INSERT INTO jogadores (nome, id_grupo)
VALUES 
('Bruno Carvalho', 4),
('Bruno Henrique', 4),
('Angelo Cuiato', 4),
('Brunna',4 ),
('Dave',4 ),
('Guilherme', 2),
('Arthur', 2),
('Pedro', 2),
('Heitor', 2),
('Leonardo', 2),
('Kauã', 1),
('Gregori', 1),
('Ederson', 1),
('Davis', 1),
('Athos', 1),
('Ana ', 3),
('Luisa ', 3),
('Gabriel ', 3),
('Robson ', 3),
('Eduardo ',3 );

UPDATE jogadores SET posicao = 1 WHERE id = 21;
UPDATE jogadores SET posicao = 2 WHERE id = 22;
UPDATE jogadores SET posicao = 3 WHERE id = 23;
UPDATE jogadores SET posicao = 2 WHERE id = 24;
UPDATE jogadores SET posicao = 1 WHERE id = 25;
UPDATE jogadores SET posicao = 3 WHERE id = 26;
UPDATE jogadores SET posicao = 3 WHERE id = 27;
UPDATE jogadores SET posicao = 4 WHERE id = 28;
UPDATE jogadores SET posicao = 2 WHERE id = 29;
UPDATE jogadores SET posicao = 1 WHERE id = 30;
UPDATE jogadores SET posicao = 1 WHERE id = 31;
UPDATE jogadores SET posicao = 3 WHERE id = 32;
UPDATE jogadores SET posicao = 2 WHERE id = 33;
UPDATE jogadores SET posicao = 2 WHERE id = 34;
UPDATE jogadores SET posicao = 3 WHERE id = 35;
UPDATE jogadores SET posicao = 4 WHERE id = 36;
UPDATE jogadores SET posicao = 4 WHERE id = 37;
UPDATE jogadores SET posicao = 4 WHERE id = 38;
UPDATE jogadores SET posicao = 1 WHERE id = 39;
UPDATE jogadores SET posicao = 4 WHERE id = 40;

INSERT INTO jogos (nome_jogo)
VALUES
('Xadres'),
('Damas'),
('Ping Pong'),
('UNU'),
('Pife');

INSERT INTO partidas (id_jogo, jogador1_id, jogador2_id, jogador3_id, jogador4_id, vencedor_id, data_partida)
VALUES
(3, 21, 27, 34, 38, 21, '2025-07-14'),
(1, 25, 26, 25, 33, 40, '2025-07-14'),
(2, 36, 29, 23, 31, 23,'2025-07-14'),
(4, 37, 30, 35, 22, 30, '2025-07-14'),
(5, 28, 32, 24, 39, 39, '2025-07-14');

UPDATE partidas
SET vencedor_id = 25
where id = 2;

UPDATE partidas
SET vencedor_id = 31
where id = 3;


SELECT jogadores.id, jogadores.nome, grupos.id, grupos.nome_grupo
FROM grupos
INNER JOIN jogadores ON grupos.id = jogadores.id_grupo;

SELECT jogadores.id, jogadores.nome, jogadores.posicao, partidas.id_jogo
FROM jogadores
INNER JOIN partidas ON jogadores.id = partidas.vencedor_id;

SELECT jogadores.id, jogadores.nome, jogadores.posicao, partidas.id_jogo
FROM jogadores
INNER JOIN partidas ON jogadores.id = partidas.vencedor_id;

SELECT jogadores.id, jogadores.nome, jogadores.posicao, partidas.id_jogo
FROM jogadores
INNER JOIN partidas ON jogadores.id = partidas.vencedor_id;

SELECT SUM(posicao) AS Menor_soma_venceu-- esse AS é basicamente a legenda que vai aparecer
FROM jogadores
INNER;