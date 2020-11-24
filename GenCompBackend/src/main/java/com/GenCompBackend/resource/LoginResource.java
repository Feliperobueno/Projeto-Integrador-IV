package com.GenCompBackend.resource;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.GenCompBackend.model.LoginUsuario;
import com.GenCompBackend.model.PessoaLista;
import com.GenCompBackend.repository.PessoaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/login")
public class LoginResource {

	@Autowired
	private PessoaRepository pessoaRepository;
	
	@PostMapping
	public ResponseEntity<PessoaLista> create(@Valid @RequestBody LoginUsuario loginUsuario, HttpServletResponse response) {
		return ResponseEntity.ok(pessoaRepository.findFiltroUsuario(loginUsuario.getLogin(), loginUsuario.getSenha()));
	}
			
}
