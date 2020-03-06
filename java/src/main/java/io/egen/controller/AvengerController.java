package io.egen.controller;

import io.egen.entity.Avenger;
import io.egen.service.AvengerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/avengers")
public class AvengerController {

    private AvengerService service;

    public AvengerController(AvengerService service) {
        this.service = service;
    }

    @GetMapping
    public List<Avenger> findAll() {
        return this.service.findAll();
    }

    @GetMapping("{id}")
    public Avenger findOne(@PathVariable(required = true) String id) {
        return this.service.findOne(id);
    }


    @PostMapping
    public Avenger create(@RequestBody Avenger avenger) {
        return this.service.create(avenger);
    }

    @PutMapping("{id}")
    public Avenger update(@PathVariable(required = true) String id, @RequestBody Avenger avenger) {
        return this.service.update(id, avenger);
    }


    @DeleteMapping("{id}")
    public void delete(@PathVariable(required = true) String id) {
        this.service.delete(id);
    }
}