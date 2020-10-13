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

import com.GenCompBackend.model.Historico;
import com.GenCompBackend.repository.HistoricoRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/historico")
public class HistoricoResource {
	
	@Autowired
	private HistoricoRepository historicoRepository;
	
	@GetMapping
	public List<Historico> list(){
		
		return historicoRepository.findAll();
	}
	
	
	@GetMapping("/{id}")
	public Optional<Historico> findById(@PathVariable Long id){
		
		return historicoRepository.findById(id);
	}
	
	@PostMapping
	public ResponseEntity<Historico> create(@Valid @RequestBody Historico historico,
			HttpServletResponse response){
		
		Historico save = historicoRepository.save(historico);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
				.buildAndExpand(save.getId()).toUri();
		
		return ResponseEntity.created(uri).body(save);
		
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		
		historicoRepository.deleteById(id);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Historico> update(@PathVariable Long id,
			@Valid @RequestBody Historico historico){
		
		Optional<Historico> historicoBanco = historicoRepository.findById(id);
		BeanUtils.copyProperties(historico,historicoBanco.get(),"id");
		historicoRepository.save(historicoBanco.get());
		return ResponseEntity.ok(historico);
		
	}

}
