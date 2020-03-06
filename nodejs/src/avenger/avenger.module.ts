import {Module} from '@nestjs/common';
import {AvengerController} from './avenger.controller';
import {AvengerService} from './avenger.service';
import {AvengerRepository} from "./avenger.repository";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([AvengerRepository]),],
    controllers: [AvengerController],
    providers: [AvengerService],
})
export class AvengerModule {
}
