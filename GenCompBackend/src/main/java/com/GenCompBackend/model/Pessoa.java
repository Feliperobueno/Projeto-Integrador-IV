package com.GenCompBackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.GenCompBackend.anotations.CpfCnpjAnotation;
import com.GenCompBackend.anotations.EmailAnotation;
import com.GenCompBackend.anotations.PerfilAnotation;
import com.GenCompBackend.anotations.SenhaAnotation;
import com.GenCompBackend.anotations.TelefoneAnotation;

@Entity
@Table(name = "pessoa")
public class Pessoa {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@Column(name="nome")
	@NotNull
	private String nome;
	
	@Column(name="cpfcnpj")
	@NotNull
	@CpfCnpjAnotation
	private String cpfCnpj;
	
	@Column(name="telefone")
	@NotNull
	@TelefoneAnotation
	private String telefone;
	
	@Column(name="email")
	@NotNull
	@EmailAnotation
	private String email;
	
	@Column(name="funcao")
	@NotNull
	private String funcao;
	
	@Column(name="login")
	@NotNull
	private String login;
	
	@Column(name="senha")
	@NotNull
	@SenhaAnotation
	private String senha;
	
	@Column(name="perfil")
	@NotNull
	@PerfilAnotation
	private String perfil;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpfCnpj() {
		return cpfCnpj;
	}

	public void setCpfCnpj(String cpfCnpj) {
		this.cpfCnpj = cpfCnpj;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFuncao() {
		return funcao;
	}

	public void setFuncao(String funcao) {
		this.funcao = funcao;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getPerfil() {
		return perfil;
	}

	public void setPerfil(String perfil) {
		this.perfil = perfil;
	}

}
