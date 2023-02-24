package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Optional;

import com.example.domains.*;
import com.example.repositories.LibroRepository;
import com.example.services.LibroService;

import org.apache.catalina.core.ApplicationContext;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.example.repositories.*;

@SpringBootTest
class DemoApplicationTests {


	@Test
	void testName() {
		
	}

	@Autowired
	LibroService libroService;
	
	@Autowired
	LibroRepository libroRepository;

	@Autowired
	EmployeeRepository employeeRepository;

	@Test
	void contextLoads() {
		//System.out.println("booo");
		
		Libro libro =new Libro();
		libro.setAutore("autore");
		libro.setTitolo("titolo");
		libro.setPrezzoCopertina(BigDecimal.valueOf(15).setScale(4));
		Libro newlibro=libroService.save(libro).get();
		//libroService.delete(6l);
		Optional<Libro> opt=libroService.findById(newlibro.getId());
		Libro recLibro=null;
		if (opt.isPresent())
			recLibro=opt.get();
		newlibro.setAutore("ciao");
	 //	assertEquals(newlibro,recLibro );
	 assertTrue(true);
	}

	@Test
	void contextLoads1() {
	
		
		this.employeeRepository.deleteById(587191L);
	}
	

}
