import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@ObjectType()
@Entity()
export class Profile {
    @Field()
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    bio: string

    @Field()
    @Column()
    avatar: string

    @Field(() => User)
    @OneToOne(() => User, (user) => user.profile)
    user: User
}