package com.synchro.cadastro.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.synchro.cadastro.entities.Register;

public interface RegisterRepository extends JpaRepository<Register, Long> {

	List<Register> findAllByOrderByNameAsc();
	
	
}
