package com.GenCompBackend.resource;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.GenCompBackend.model.Solicitacao;
import com.GenCompBackend.repository.SolicitacaoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/solicitacao")
public class SolicitacaoResource {
	
	@Autowired
	private SolicitacaoRepository solicitacaoRepository;
	
	@GetMapping
	public List<Solicitacao> list(){
		
		return solicitacaoRepository.findAll();
	}
	
	
	@GetMapping("/{id}")
	public Optional<Solicitacao> findById(@PathVariable Long id){
		
		return solicitacaoRepository.findById(id);
	}
	
	@PostMapping
	public ResponseEntity<Solicitacao> create(@Valid @RequestBody Solicitacao solicitacao,
			HttpServletResponse response){
		
		Solicitacao save = solicitacaoRepository.save(solicitacao);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
				.buildAndExpand(save.getId()).toUri();
		
		return ResponseEntity.created(uri).body(save);
		
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		
		solicitacaoRepository.deleteById(id);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Solicitacao> update(@PathVariable Long id,
			@Valid @RequestBody Solicitacao solicitacao){
		
		Optional<Solicitacao> solicitacaoBanco = solicitacaoRepository.findById(id);
		BeanUtils.copyProperties(solicitacao,solicitacaoBanco.get(),"id");
		solicitacaoRepository.save(solicitacaoBanco.get());
		return ResponseEntity.ok(solicitacao);
		
	}

}
