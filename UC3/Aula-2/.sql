-- Adicionando coluna onde tem um valor padrão por conta do DEFAULT
alter table produtos add estoque int not null default 0;