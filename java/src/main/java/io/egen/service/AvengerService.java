package io.egen.service;

import io.egen.entity.Avenger;
import io.egen.exception.BadRequestException;
import io.egen.exception.NotFoundException;
import io.egen.repository.AvengerRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class AvengerService {

    private AvengerRepository repository;

    public AvengerService(AvengerRepository repository) {
        this.repository = repository;
    }

    public List<Avenger> findAll() {
        return this.repository.findAll();
    }

    public Avenger findOne(String id) {
        Optional<Avenger> existing = this.repository.findById(id);
        if (!existing.isPresent()) {
            throw new NotFoundException("Avenger with the id:" + id + " doesn't exist.");
        }
        return existing.get();
    }

    public Avenger create(Avenger avenger) {
        Optional<Avenger> existing = this.repository.findByName(avenger.getName());
        if (existing.isPresent()) {
            throw new BadRequestException("Avenger with the name:" + avenger.getName() + " already exist.");
        }
        return this.repository.save(avenger);
    }

    public Avenger update(String id, Avenger avenger) {
        Optional<Avenger> existing = this.repository.findById(id);
        if (!existing.isPresent()) {
            throw new NotFoundException("Avenger with the id:" + id + " doesn't exist.");
        }
        avenger.setId(id);
        return this.repository.save(avenger);
    }

    public void delete(String id) {
        Optional<Avenger> existing = this.repository.findById(id);
        if (!existing.isPresent()) {
            throw new NotFoundException("Avenger with the id:" + id + " doesn't exist.");
        }
        this.repository.deleteById(id);
    }

}