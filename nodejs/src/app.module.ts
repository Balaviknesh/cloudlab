import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AvengerModule} from "./avenger/avenger.module";

@Module({
    imports: [TypeOrmModule.forRoot(), AvengerModule],
})
export class AppModule {
}
