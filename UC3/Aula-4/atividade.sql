create database atividade;
use atividade;

create table categorias(
	id int primary key auto_increment,
    nome varchar(100) not null
);

create table produtos(
	id int primary key auto_increment,
    nome varchar(100) not null,
    valor decimal(7,2),
    id_categoria int not null
);

alter table produtos modify valor decimal(7,2) not null;

alter table produtos add
constraint fk_produtos_categorias
foreign key (id_categoria) references categorias(id);

create table usuarios(
	id int primary key auto_increment,
    nome varchar(100) not null,
    email varchar(50) not null unique
);

create table pedidos(
	id int primary key auto_increment,
    id_usuarios int not null,
    id_produtos int not null,
    quiantidade int not null default 0,
    data_pedido datetime default CURRENT_TIMESTAMP,
    foreign key (id_usuarios) references usuarios(id),
    foreign key (id_produtos) references produtos(id)
);

alter table pedidos 
change column quiantidade quantidade int not null default 0;

alter table pedidos add
constraint fk_pedidos_usuarios
foreign key (id_usuarios) references usuarios(id);

alter table pedidos add
constraint fk_pedidos_produtos
foreign key (id_produtos) references produtos(id);

insert into usuarios (nome, email)
values ('Ana Paula', 'ana.paula@email.com'),
('Bruno Mendes', 'bruno.mendes@email.com'),
('Carlos Silva', 'carlos.silva@email.com'),
('Daniela Rocha', 'daniela.rocha@email.com'),
('Eduardo Lima', 'eduardo.lima@email.com'),
('Fernanda Torres', 'fernanda.torres@email.com'),
('Gustavo Souza', 'gustavo.souza@email.com'),
('Helena Martins', 'helena.martins@email.com'),
('Igor Ferreira', 'igor.ferreira@email.com'),
('Juliana Alves', 'juliana.alves@email.com'),
('Kaio Batista', 'kaio.batista@email.com');

insert into categorias (nome)
values ('Smartphones'),
('Notebooks e Computadores'),
('Tablets'),
('TVs e Monitores'),
('Áudio e Fones de Ouvido'),
('Acessórios para Celular'),
('Periféricos de Informática'),
('Câmeras e Filmadoras'),
('Games e Consoles'),
('Dispositivos de Rede');

insert into produtos (nome, valor, id_categoria)
values ('iPhone 14 128GB', 4499.00, 1),    
('Notebook Dell Inspiron i5', 3799.90, 2),       
('Tablet Samsung Galaxy Tab A8', 1249.00, 3),        
('Smart TV LG 50" 4K', 2699.00, 4),                  
('Fone Bluetooth JBL Tune 510BT', 249.90, 5),          
('Carregador Turbo USB-C 20W', 59.90, 6),            
('Mouse Gamer Logitech G203', 149.90, 7),            
('Câmera GoPro Hero 11', 2399.00, 8),                 
('Console PlayStation 5', 4299.00, 9),                 
('Roteador TP-Link Archer C6', 199.00, 10);

insert into pedidos (id_usuarios, id_produtos, quantidade)
values (30, 27, 5),
(25, 29, 6),
(29, 23, 2),
(27, 28, 9);

insert into pedidos (, id_produtos, quantidade)
values (27, 5),
(9, 6);

delete from pedidos
where id > 0;

delete from usuarios
where id > 0;

drop table pedidos;

alter table pedidos
drop foreign key fk_pedidos_produtos;

select * from usuarios;
select * from produtos;
select * from categorias;
select * from pedidos;