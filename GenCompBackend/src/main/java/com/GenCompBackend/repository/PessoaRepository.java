package com.GenCompBackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.GenCompBackend.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa,Long> {
	
	Optional<Pessoa> findByLogin(String login);
	
	Optional<Pessoa> findByPerfil(String perfil);

}
