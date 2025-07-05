-- Devolve todos os valores da tabela
SELECT * FROM user;

-- Devolve um valor especificado
SELECT nome FROM user;

-- Devolve mais de um valor especificado
SELECT nome, senha FROM user;

-- Devolve todos os valores da tabela onde o id for 2
SELECT * FROM user WHERE id = 2;

-- Devolve todos os valores da tabela onde o id for maior que 2
SELECT * FROM user WHERE id > 2;

-- Devolve apenas 5
SELECT * FROM users LIMIT 5;

-- Devolve Todos mas evitas epetidos
SELECT DISTINCT * FROM users;