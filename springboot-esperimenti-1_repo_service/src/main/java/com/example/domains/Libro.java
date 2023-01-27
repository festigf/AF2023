package com.example.domains;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "libri") // se si specifica solo @Entity con name vale anche per table in db
@Data
@Table(name ="libri")
@AllArgsConstructor
@NoArgsConstructor
public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name="titolo",nullable = false) //,unique = true)
    String titolo;
    @Column(name="autore")
    String autore;

    @Column(name="prezzo_di_copertina",precision=19,scale = 4)
    BigDecimal  prezzoCopertina;
}
