package com.example.domain;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="dipendenti") // 
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Dipendente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment 
    Long id;
    
    @Column(name="nominativo",length=50,nullable = true)
    String nominativo;

    @Column(precision = 18,scale=4)
    BigDecimal stipendio;
    
     
}
