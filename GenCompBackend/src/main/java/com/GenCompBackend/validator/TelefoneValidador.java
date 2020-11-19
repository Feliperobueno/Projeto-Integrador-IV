package com.GenCompBackend.validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.GenCompBackend.anotations.TelefoneAnotation;

public class TelefoneValidador implements ConstraintValidator<TelefoneAnotation,Object>{
	
	private Pattern padraoTelefone = Pattern.compile("[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}");

	@Override
	public boolean isValid(Object value, ConstraintValidatorContext context) {
		
		if (value == null || "".equals(value)) {
			return true;
		}
		
		
		Matcher matcher = padraoTelefone.matcher(value.toString());
		return matcher.matches();
		// TODO Auto-generated method stub
		
	}

}
