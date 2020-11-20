package com.GenCompBackend.security.basic;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.GenCompBackend.model.Pessoa;
import com.GenCompBackend.repository.PessoaRepository;


@Profile("oauth-security")
@Configuration
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Override
	public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Optional <Pessoa> pessoaOptional = pessoaRepository.findByLogin(login);
	    
		Pessoa pessoa = pessoaOptional.orElseThrow(
				() -> new UsernameNotFoundException("Usuario e /ou senha incorretos"));
		return new User(login, pessoa.getSenha(),getPermissoes(pessoa)); 
		
	}
	
	private Collection<? extends GrantedAuthority>getPermissoes(Pessoa pessoa) {
		// TODO Auto-generated method stub
		List<GrantedAuthority> permissoes = new ArrayList<GrantedAuthority>();

        permissoes.add(new SimpleGrantedAuthority(pessoa.getPerfil()));

        return permissoes;
		
	}
	

}
