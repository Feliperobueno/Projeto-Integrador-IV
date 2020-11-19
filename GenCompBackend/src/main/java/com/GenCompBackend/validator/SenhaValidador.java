package com.GenCompBackend.validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.GenCompBackend.anotations.SenhaAnotation;


public class SenhaValidador implements ConstraintValidator<SenhaAnotation, Object> {

	private Pattern padraoSenha = Pattern.compile("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$");
	
	@Override
	public boolean isValid(Object value, ConstraintValidatorContext context) {
		// TODO Auto-generated method stub
		if (value == null || "".equals(value)) {
			return true;
		}
		

		Matcher matcher = padraoSenha.matcher(value.toString());
		return matcher.matches();
	}

}
