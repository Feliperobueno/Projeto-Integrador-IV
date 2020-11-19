package com.GenCompBackend.validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.GenCompBackend.anotations.PerfilAnotation;



public class PerfilValidador implements ConstraintValidator<PerfilAnotation, Object> {
	
	private Pattern padraoPerfil = Pattern.compile("Cliente|Funcionario");

	@Override
	public boolean isValid(Object value, ConstraintValidatorContext context) {
		// TODO Auto-generated method stub
		if (value == null || "".equals(value)) {
			return true;
		}
		

		Matcher matcher = padraoPerfil.matcher(value.toString());
		return matcher.matches();
	}

}
