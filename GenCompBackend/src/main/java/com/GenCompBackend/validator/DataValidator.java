package com.GenCompBackend.validator;

//import java.io.Console;
//import java.text.ParseException;
//import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

//import org.hibernate.annotations.common.util.impl.Log;

import com.GenCompBackend.anotations.DataAnotation;



public class DataValidator implements ConstraintValidator<DataAnotation, Object> {

	@Override
	public boolean isValid(Object value, ConstraintValidatorContext context) {
		if (value == null || "".equals(value)) {
			return true;
		}
		
		
		Date data = (Date)value;
		Calendar calendarData = Calendar.getInstance();
		calendarData.setTime(data);
		calendarData.add(Calendar.HOUR, 23);
        calendarData.add(Calendar.MINUTE, 59);
        calendarData.add(Calendar.SECOND, 59);
        
        Date dataFinal = calendarData.getTime();
		
			//data = formatador.parse(value.toString());
			System.out.println(dataFinal);
			
			return validarData.ValidarData(dataFinal);
		
	

		
		//return true;
		/*Date dataColocada;
		Date dataAtual = new Date();
		SimpleDateFormat sdf1 = new SimpleDateFormat("dd/MM/yyyy");
		try {
			dataColocada = sdf1.parse(value.toString());
			if(dataColocada.before(dataAtual)) {
				return true;
			}
			else {
				return false;
			}
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		
		
			
		}
		
		*/
		
		
	
		
	}

}
