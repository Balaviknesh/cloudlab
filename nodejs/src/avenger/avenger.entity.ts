import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class Avenger {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @ApiProperty()
    @Column({length: 255, unique: true})
    name: string;

    @ApiProperty()
    @Column()
    realName: string;

    @ApiProperty()
    @Column({length: 100})
    superpower: string;
}
