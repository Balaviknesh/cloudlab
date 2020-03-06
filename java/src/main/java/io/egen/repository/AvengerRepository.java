package io.egen.repository;

import io.egen.entity.Avenger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AvengerRepository extends JpaRepository<Avenger, String> {
    public Optional<Avenger> findByName(String name);
}