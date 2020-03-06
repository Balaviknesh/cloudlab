import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {AvengerRepository} from "./avenger.repository";
import {Avenger} from "./avenger.entity";

@Injectable()
export class AvengerService {
    constructor(private repository: AvengerRepository) {
    }

    async findAll(): Promise<Avenger[]> {
        return await this.repository.find();
    }

    async findOne(id: string): Promise<Avenger> {
        const existing = await this.repository.findOne(id);
        if (!existing) {
            throw new NotFoundException(`Avenger with the id:${id} doesn't exist.`);
        }
        return existing;
    }

    async create(avenger: Avenger): Promise<Avenger> {
        const existing = await this.repository.findOne({name: avenger.name});
        if (existing) {
            throw new BadRequestException(`Avenger with the name:${avenger.name} already exist.`);
        }
        return await this.repository.save(avenger);
    }

    async update(id: string, avenger: Avenger): Promise<Avenger> {
        const existing = await this.repository.findOne(id);
        if (!existing) {
            throw new NotFoundException(`Avenger with the id:${id} doesn't exist.`);
        }
        avenger.id = id;
        return await this.repository.save(avenger);
    }

    async delete(id: string): Promise<void> {
        const existing = await this.repository.findOne(id);
        if (!existing) {
            throw new NotFoundException(`Avenger with the id:${id} doesn't exist.`);
        }
        await this.repository.delete(id);
    }

}
