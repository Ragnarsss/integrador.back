import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProfessionalModule } from './professional/professional.module';
import { ServiceModule } from './service/service.module';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    UserModule,
    ProfessionalModule,
    ServiceModule,
    PrismaModule,
    AuthModule,
  ],
})
export class AppModule {}
