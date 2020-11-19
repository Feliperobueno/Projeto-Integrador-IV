package com.GenCompBackend.anotations;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

import com.GenCompBackend.validator.CpfCnpjValidator;



@Constraint(validatedBy = CpfCnpjValidator.class)
@Documented
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface CpfCnpjAnotation {
	
	String message() default "CPF ou CNPJ inválido! ";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};
	/*
	 * message - retorna a chave padrão para criar mensagens de erro, isso nos
	 * permite usar a interpolação de mensagens 
	 * 
	 * groups - permite especificar grupos de validação para nossas restrições 
	 * 
	 * payload - pode ser usada pelos clientes da API de validação de 
	 * bean para atribuir objetos de carga útil personalizados a uma restrição *
	 */

}
