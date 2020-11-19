package com.GenCompBackend.model;

import java.util.Date;

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
@Table(name="solicitacao")
public class Solicitacao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	@NotNull
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="id_cliente")
	@NotNull
	private Pessoa cliente;
	
	@ManyToOne
	@JoinColumn(name="id_tipoServico")
	@NotNull
	private TipoServico tipoServico;
	
	@ManyToOne
	@JoinColumn(name="id_local")
	@NotNull
	private LaboratorioSala laboratorioSala;
	
	@ManyToOne
	@JoinColumn(name="id_equipamento")
	@NotNull
	private Equipamento equipamento;
	
	@Column(name="data")
	@NotNull
	private Date data;
	
	@Column(name="descricao")
	@NotNull
	private String descricao;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Pessoa getCliente() {
		return cliente;
	}

	public void setCliente(Pessoa cliente) {
		this.cliente = cliente;
	}

	public TipoServico getTipoServico() {
		return tipoServico;
	}

	public void setTipoServico(TipoServico tipoServico) {
		this.tipoServico = tipoServico;
	}

	public LaboratorioSala getLaboratorioSala() {
		return laboratorioSala;
	}

	public void setLaboratorioSala(LaboratorioSala laboratorioSala) {
		this.laboratorioSala = laboratorioSala;
	}

	public Equipamento getEquipamento() {
		return equipamento;
	}

	public void setEquipamento(Equipamento equipamento) {
		this.equipamento = equipamento;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	
	

}
