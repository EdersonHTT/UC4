create table pedidos(
	id int primary key auto_increment,
    id_usuarios int not null,
    id_produtos int not null,
    quiantidade int not null default 1,
    data_pedido datetime default CURRENT_TIMESTAMP,

-- Definindo as chaves estrangeiras
    foreign key (id_usuarios) references usuarios(id),
    foreign key (id_produtos) references produtos(id)
);

-- Definindo depois de criar
alter table pedidos add
-- Colocando um nome de referecia diferente do que o criado ao criar a chave pela tabela
constraint fk_pedidos_usuarios
foreign key (id_usuarios) references usuarios(id);

---
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    data_pedido DATE,

    -- Colocando um nome de referencia e deletando o CASCADE já pela criação da tabela
    CONSTRAINT fk_cliente
        FOREIGN KEY (cliente_id)
        REFERENCES clientes(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Criando a chave por fora e add o deletar e atualizar do CASCADE

alter table pedidos add 
constraint fk_produto
foreign key (id_produto) references produto(id) 
on delete cascade on update cascade;