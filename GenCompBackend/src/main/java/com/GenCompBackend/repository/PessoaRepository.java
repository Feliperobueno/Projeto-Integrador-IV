package com.GenCompBackend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.GenCompBackend.model.Pessoa;
import com.GenCompBackend.model.PessoaLista;


public interface PessoaRepository extends JpaRepository<Pessoa,Long> {
	
	//Optional<Pessoa> findByLogin(String login);
	
	List<Pessoa> findByPerfil(String perfil);
	
	@Query(value = "select id, nome, perfil from pessoa where login = ?1 and senha = ?2", nativeQuery = true)
    PessoaLista findFiltroUsuario(String login, String senha);

	//@Query(value = "select id, nome from Pessoa where perfil = ?1", nativeQuery = false)
	@Query(value = "select pes_id as id, pes_nome as nome from pessoa where pes_perfil = ?1", nativeQuery = true)
    List<PessoaLista> listUsuariosPorPerfil(String perfil);
	
	

}
