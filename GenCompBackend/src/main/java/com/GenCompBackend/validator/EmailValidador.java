package com.GenCompBackend.validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.GenCompBackend.anotations.EmailAnotation;

public class EmailValidador implements ConstraintValidator<EmailAnotation,Object> {
	
	private Pattern padraoEmail = Pattern.compile("^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+\\.)+[a-z]{2,5}$");

	@Override
	public boolean isValid(Object value, ConstraintValidatorContext context) {
		
		if (value == null || "".equals(value)) {
			return true;
		}
		
		
		Matcher matcher = padraoEmail.matcher(value.toString());
		return matcher.matches();
		// TODO Auto-generated method stub
		
	}

}
