package com.brunobessa.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunobessa.dspesquisa.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long>{

}
