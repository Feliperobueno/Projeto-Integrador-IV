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

import com.GenCompBackend.model.Equipamento;
import com.GenCompBackend.repository.EquipamentoRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/equipamento")
public class EquipamentoResource {
	
	@Autowired
	private EquipamentoRepository equipamentoRepository;
	
	@GetMapping
	public List<Equipamento> list(){
		
		return equipamentoRepository.findAll();
	}
	
	
	@GetMapping("/{id}")
	public Optional<Equipamento> findById(@PathVariable Long id){
		
		return equipamentoRepository.findById(id);
	}
	
	@PostMapping
	public ResponseEntity<Equipamento> create(@Valid @RequestBody Equipamento equipamento,
			HttpServletResponse response){
		
		Equipamento save = equipamentoRepository.save(equipamento);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
				.buildAndExpand(save.getId()).toUri();
		
		return ResponseEntity.created(uri).body(save);
		
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		
		equipamentoRepository.deleteById(id);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Equipamento> update(@PathVariable Long id,
			@Valid @RequestBody Equipamento equipamento){
		
		Optional<Equipamento> equipamentoBanco = equipamentoRepository.findById(id);
		BeanUtils.copyProperties(equipamento,equipamentoBanco.get(),"id");
		equipamentoRepository.save(equipamentoBanco.get());
		return ResponseEntity.ok(equipamento);
		
	}


}
