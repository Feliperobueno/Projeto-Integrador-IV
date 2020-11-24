package com.GenCompBackend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.GenCompBackend.model.Pessoa;
import com.GenCompBackend.model.PessoaPerfil;

public interface PessoaRepository extends JpaRepository<Pessoa,Long> {
	
	Optional<Pessoa> findByLogin(String login);
	
	//List<Pessoa> findByPerfil(String perfil);
	
	@Query(value = "select * from pessoa where perfil = ?1", nativeQuery = true)
    List<PessoaPerfil> listUsuariosPorPerfil(@Param("perfil") String perfil);

}
