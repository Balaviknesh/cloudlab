import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AvengerService} from './avenger.service';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {Avenger} from "./avenger.entity";

@ApiTags('avengers')
@Controller('v1/avengers')
export class AvengerController {
    constructor(private readonly service: AvengerService) {
    }

    @Get()
    @ApiOperation({
        description: 'Find All Avengers'
    })
    async findAll(): Promise<Avenger[]> {
        return await this.service.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Avenger> {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() avenger: Avenger): Promise<Avenger> {
        return await this.service.create(avenger);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() avenger: Avenger): Promise<Avenger> {
        return await this.service.update(id, avenger);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.service.delete(id);
    }
}
