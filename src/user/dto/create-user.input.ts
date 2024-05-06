import { Field, InputType, Float } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({
    nullable: false,
  })
  userName: string;

  @Field({
    nullable: false,
  })
  email: string;

  @Field({
    nullable: false,
  })
  password: string;
}
