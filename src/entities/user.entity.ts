import { Field, ObjectType, ID } from "@nestjs/graphql";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";
import { Profile } from "./profile.entity";


@ObjectType()
@Entity()
export class User {
    constructor(partial?: Partial<User>) {
        Object.assign(this, partial)
    }

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string

    @Field()
    @Column()
    username: string

    @Field()
    @Column()
    email: string

    @Field(() => Profile, { nullable: true})
    @OneToOne(() => Profile, (profile) => profile.user)
    profile: Profile

    @Field(() => [Post], { nullable: 'items' })
    @OneToMany(() => Post, (post) => post.user)
    post: Post[]
}