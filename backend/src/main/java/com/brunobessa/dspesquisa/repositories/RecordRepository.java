package com.brunobessa.dspesquisa.repositories;

import java.time.Instant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.brunobessa.dspesquisa.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{
	
	
	@Query("SELECT obj FROM Record obj WHERE "
            + "(COALESCE(:min, obj.moment) <= obj.moment) AND "
            + "(COALESCE(:max, obj.moment) >= obj.moment)")
	Page<Record> findByMoments(Instant min,Instant max, Pageable pageable);

}
