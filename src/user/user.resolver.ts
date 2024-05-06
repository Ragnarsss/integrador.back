import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  async user(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Query()
  async users() {
    return this.userService.findAll();
  }

  @Mutation()
  async createUser(@Args('input') input: CreateUserInput) {
    return this.userService.create(input);
  }

  @Mutation()
  async updateUser(
    @Args('id') id: string,
    @Args('input') input: UpdateUserInput,
  ) {
    return this.userService.update(id, input);
  }

  @Mutation()
  async deleteUser(@Args('id') id: string) {
    return this.userService.delete(id);
  }
}
