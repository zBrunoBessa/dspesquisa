package com.brunobessa.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunobessa.dspesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long>{

}
