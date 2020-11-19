package com.GenCompBackend.validator;



import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.GenCompBackend.anotations.CpfCnpjAnotation;



public class CpfCnpjValidator implements ConstraintValidator<CpfCnpjAnotation, Object>{

	//private ValidarCpfCnpj validar = new ValidarCpfCnpj();
	@Override
	public boolean isValid(Object value, ConstraintValidatorContext context) {
		// TODO Auto-generated method stub
		if (value == null || "".equals(value)) {
			return true;
		}
		
			
			return ValidarCpfCnpj.CpfOuCnpj(value.toString());
		
		
	}
	
	

}
