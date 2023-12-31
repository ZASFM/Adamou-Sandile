import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriverConfig } from '@nestjs/apollo/dist/interfaces';
import { ApolloFederationDriver } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, ConfigService, JwtService],
})
export class UsersModule {}
