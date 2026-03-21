CREATE DATABASE graos;
use graos;

create table produto (
	id int auto_increment primary key,
    nome varchar(100),
    tipo varchar(50)
);

create table estoque(
	id int auto_increment primary key,
    produto_id int,
    quantidade int
);

create table pedido(
	id int auto_increment primary key,
    cliente_id int,
    data date,
    status bool
);

create table cliente (
	id int auto_increment primary key,
    nome varchar(100),
    cnpj varchar(14)
);

show tables;

insert into produto (nome, tipo) 
values ('Óleo de soja', 'soja'),
	   ('Farinha','trigo');
       
select * from produto;

insert into cliente (nome,cnpj)
values ('Leonardo', '61024840000189'),
       ('Roberto', '34784963000145');
       
select * from cliente;