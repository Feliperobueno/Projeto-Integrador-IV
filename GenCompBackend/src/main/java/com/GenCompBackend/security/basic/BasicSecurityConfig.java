package com.GenCompBackend.security.basic;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Profile("basic-security")
@EnableWebSecurity
public class BasicSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		
		auth.inMemoryAuthentication()
		.withUser("admin").password("$2a$10$C5aYbxwyXdFM6jXUZIHrv.ht7iYdFUeno2qYwvdaiTxNcLyRzNmxm").roles("ROLE");
		//Senac123
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		
		http.authorizeRequests()
			.antMatchers("/pessoa").permitAll()
			//.antMatchers("/pessoa/{id}").permitAll()
			.anyRequest().authenticated()
			.and().httpBasic()
			.and().sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and().csrf().disable();
	}
	
	
	
	

}
