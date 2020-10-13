package com.GenCompBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.GenCompBackend.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa,Long> {

}
