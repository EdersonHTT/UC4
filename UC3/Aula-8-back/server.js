const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'meu_banco'
});

connection.connect(error => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados: ' + error.stack);
        return;
    }
    console.log('Conectado ao banco de dados com ID ' + connection.threadId);
});

app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, senha], (error) => {
        if (error) return res.status(500).send('Erro ao adicionar usuário.');
        res.status(201).send('Usuário adicionado com sucesso.');
    });
});

app.get('/usuarios', (req, res) => {
    const sql = "SELECT * FROM usuarios;";
    connection.query(sql, (error, info) => {
        if (error) return res.status(500).send('Erro ao mostrar usuário.');
        res.status(200).send(info);
    });
});

app.put('/usuarios', (req, res) => {
    const { id, dado, info } = req.body;
    const sql = `UPDATE usuarios SET ${dado} = ? WHERE id = ?;`;
    connection.query(sql, [info, id], (error) => {
        if (error) return res.status(500).send('Erro ao atualizar usuário.');
        res.status(201).send('Usuário atualizado com sucesso.');
    });
});

app.delete('/usuarios', (req, res) => {
    const { id } = req.body;
    const sql = "DELETE FROM usuarios WHERE id = ?;";
    connection.query(sql, [ id ], (error, info) => {
        if (error) return res.status(500).send('Erro ao deletar usuário.');
        res.status(200).send("Usuario deletado com sucesso");
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});