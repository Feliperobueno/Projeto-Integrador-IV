package com.GenCompBackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="equipamento")
public class Equipamento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="id_laboratorioSala")
	@NotNull
	private LaboratorioSala laboratorioSala;
	
	@Column(name="nome")
	@NotNull
	private String nome;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LaboratorioSala getLaboratorioSala() {
		return laboratorioSala;
	}

	public void setLaboratorioSala(LaboratorioSala laboratorioSala) {
		this.laboratorioSala = laboratorioSala;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
	

}
