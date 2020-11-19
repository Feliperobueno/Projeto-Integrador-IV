package com.GenCompBackend.validator;

import java.util.Date;

public class validarData {
	
	public static boolean ValidarData(Date data) {
	
		Date dataAtual = new Date();
		if(data.equals(dataAtual) || data.after(dataAtual)) {
			System.out.println(dataAtual);
			return true;
		}
		else {
			return false;
		}
	}
		
	
}
	
	
	
	
	


