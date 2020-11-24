Create database gencomp;

Create table Pessoa(

	id serial,
	nome varchar(255),
	cpfCnpj varchar(14),
	telefone varchar(14),
	email varchar(255),
	funcao varchar(255),
	login varchar(255),
	senha varchar(255),
	perfil varchar(255),
	
	PRIMARY KEY(id)
); 

Create table TipoServico(

	id serial,
	descricao varchar(255),
	PRIMARY KEY(id)
);

Create Table LaboratorioSala(

	id serial,
	nome varchar(255),
	PRIMARY KEY(id)
);

Create Table Equipamento(

	id serial,
	nome varchar(255),
	PRIMARY KEY(id),
	FOREIGN KEY(id_laboratorioSala) references LaboratorioSala(id)
);


Create Table OrdemServico(

	id serial,
	id_funcionario integer,
	id_cliente integer,
	id_tipoServico integer,
	dataEmissao Date,
	dataFechamento Date,
	status varchar(255),
	descricao varchar(255),
	id_local integer,
	id_equipamento integer,
	PRIMARY KEY(id),
	FOREIGN KEY(id_funcionario) references pessoa(id),
	FOREIGN KEY(id_cliente) references pessoa(id),
	FOREIGN KEY(id_tipoServico) references TipoServico(id),
	FOREIGN KEY(id_local) references LaboratorioSala(id),
	FOREIGN KEY(id_equipamento) references Equipamento(id)

);

Create Table Historico(

	id serial,
	id_ordemServico integer,
	data Date,
	status varchar(255),
	id_funcionario integer,
	PRIMARY KEY(id),
	FOREIGN KEY(id_ordemServico) references OrdemServico(id),
	FOREIGN KEY(id_funcionario) references pessoa(id)
);