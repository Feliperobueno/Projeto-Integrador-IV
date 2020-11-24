package com.GenCompBackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.GenCompBackend.model.OrdemServico;
import com.GenCompBackend.model.Pessoa;

public interface OrdemServicoRepository extends JpaRepository<OrdemServico,Long>{
	
	List<OrdemServico> findByFuncionario(Pessoa funcionario);
	List<OrdemServico> findByCliente(Pessoa Cliente);
	
	

}
