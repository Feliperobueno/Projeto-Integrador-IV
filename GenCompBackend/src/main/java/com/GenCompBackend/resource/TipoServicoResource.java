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

import com.GenCompBackend.model.TipoServico;
import com.GenCompBackend.repository.TipoServicoRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/tipoServico")
public class TipoServicoResource {
	
	@Autowired
	private TipoServicoRepository tipoServicoRepository;
	
	@GetMapping
	public List<TipoServico> list(){
		
		return tipoServicoRepository.findAll();
	}
	
	
	@GetMapping("/{id}")
	public Optional<TipoServico> findById(@PathVariable Long id){
		
		return tipoServicoRepository.findById(id);
	}
	
	@PostMapping
	public ResponseEntity<TipoServico> create(@Valid @RequestBody TipoServico tipoServico,
			HttpServletResponse response){
		
		TipoServico save = tipoServicoRepository.save(tipoServico);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
				.buildAndExpand(save.getId()).toUri();
		
		return ResponseEntity.created(uri).body(save);
		
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		
		tipoServicoRepository.deleteById(id);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<TipoServico> update(@PathVariable Long id,
			@Valid @RequestBody TipoServico tipoServico){
		
		Optional<TipoServico> tipoServicoBanco = tipoServicoRepository.findById(id);
		BeanUtils.copyProperties(tipoServico,tipoServicoBanco.get(),"id");
		tipoServicoRepository.save(tipoServicoBanco.get());
		return ResponseEntity.ok(tipoServico);
		
	}

}
