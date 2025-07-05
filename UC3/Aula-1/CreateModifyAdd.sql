-- Como criar a tabela
CREATE TABLE IF NOT EXISTS usuarios (
-- Nome Tipo Outras caracteristicas
id INT PRIMARY KEY,
nome VARCHAR(100),
idade INT,
email VARCHAR(50),
senha VARCHAR(25)
);

-- Como alterar uma tabela e add nova coluna
ALTER TABLE usuarios ADD endereco VARCHAR(100)

-- Como alterar uma tabela e mudar o tipo de uma coluna
ALTER TABLE usuarios MODIFY endereco TEXT

-- Como alterar uma tabela e mudar o nome de uma coluna
ALTER TABLE usuarios 
CHANGE COLUMN endereco logradouro VARCHAR(255)

-- Para apagar uma coluna
ALTER TABLE usuarios DROP COLUMN idade;

-- Deletar tabela
DROP TABLE usuarios;

-- Insere informações na tabela
INSERT INTO users(id, username, email, user_password) VALUES 
(2, 'Gregori', 'Gregori@gmail.com', '123ada14e');

-- Atualiza uma ou mais informações da tabela
UPDATE users
SET email = 'eder@gmail.com'
where id = 1;

-- Como Deletar um dado
DELETE FROM users
WHERE id = 2;