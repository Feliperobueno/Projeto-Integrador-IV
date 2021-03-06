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

import com.GenCompBackend.model.LaboratorioSala;
import com.GenCompBackend.repository.LaboratorioSalaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/laboratorioSala")
public class LaboratorioSalaResource {
	
	@Autowired
	private LaboratorioSalaRepository laboratorioSalaRepository;
	
	@GetMapping
	public List<LaboratorioSala> list(){
		
		return laboratorioSalaRepository.findAll();
	}
	
	
	@GetMapping("/{id}")
	public Optional<LaboratorioSala> findById(@PathVariable Long id){
		
		return laboratorioSalaRepository.findById(id);
	}
	
	@PostMapping
	public ResponseEntity<LaboratorioSala> create(@Valid @RequestBody LaboratorioSala laboratorioSala,
			HttpServletResponse response){
		
		LaboratorioSala save = laboratorioSalaRepository.save(laboratorioSala);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
				.buildAndExpand(save.getId()).toUri();
		
		return ResponseEntity.created(uri).body(save);
		
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		
		laboratorioSalaRepository.deleteById(id);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<LaboratorioSala> update(@PathVariable Long id,
			@Valid @RequestBody LaboratorioSala laboratorioSala){
		
		Optional<LaboratorioSala> laboratorioSalaBanco = laboratorioSalaRepository.findById(id);
		BeanUtils.copyProperties(laboratorioSala,laboratorioSalaBanco.get(),"id");
		laboratorioSalaRepository.save(laboratorioSalaBanco.get());
		return ResponseEntity.ok(laboratorioSala);
		
	}

}
