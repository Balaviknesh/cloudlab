import {EntityRepository, Repository} from 'typeorm';
import {Avenger} from "./avenger.entity";

@EntityRepository(Avenger)
export class AvengerRepository extends Repository<Avenger> {
}
