import { Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity'

@Resolver(() => User)
export class UserResolver {
    @Query(() => [User], { name: 'users' })
    async findAll(){
        return [] as User[]
    }
}
