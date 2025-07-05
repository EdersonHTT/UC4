-- Ordenar do menor pro maior 
SELECT * FROM users ORDER BY nome ASC; -- Vai ordenar de A à Z
-- Ordenar do menor pro maior 
SELECT * FROM users ORDER BY id ASC; -- Vai ordenar de 1 à infinito

-- Ordenar do maior pro menor 
SELECT * FROM users ORDER BY nome DESC; -- Vai ordenar de Z à A
-- Ordenar do maior pro menor 
SELECT * FROM users ORDER BY id ASC; -- Vai ordenar de um numero até 1

-- Ordenar do maior pro menor o que tem o id acima de 2
SELECT * FROM user WHERE id > 2 ORDER BY nome DESC;