package com.example.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.domain.*;
// mette a disposizione le api per leggere/modificare/cancellare i rcord della tab
// dipendenti
@Repository 
public interface DipendenteRepo extends JpaRepository<Dipendente,Long> {
    
}
