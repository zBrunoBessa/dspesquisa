package com.brunobessa.dspesquisa.services;

import java.time.Instant;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.brunobessa.dspesquisa.dto.RecordDTO;
import com.brunobessa.dspesquisa.dto.RecordInsertDTO;
import com.brunobessa.dspesquisa.entities.Game;
import com.brunobessa.dspesquisa.entities.Record;
import com.brunobessa.dspesquisa.repositories.GameRepository;
import com.brunobessa.dspesquisa.repositories.RecordRepository;
import com.brunobessa.dspesquisa.services.exceptions.ResourceNotFoundException;



@Service
public class RecordService {

	@Autowired
	private RecordRepository repository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional(readOnly = true)
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		Optional<Game> obj = gameRepository.findById(dto.getGameId());
		Game game = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		entity.setGame(game);
		
		entity = repository.save(entity);
		
		return new RecordDTO(entity);
	}
}
