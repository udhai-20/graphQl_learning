import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { LessonResolver } from './lesson/lesson.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/entity/lesson.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot(({
      type:"mongodb",
      url:"mongodb://localhost/school",
      synchronize:true,
      useUnifiedTopology:true,
      entities:[Lesson]

    })),
  GraphQLModule.forRoot({
    autoSchemaFile:true,
    driver:ApolloDriver,
    autoSchmaFile:join(process.cwd(),"src/schema.gql"),
    playground:true,
    // plugins:[ApolloServerPluginLandingPageLocalDefault()]
  }),
  LessonModule
  ],

  controllers:[],
  providers:[LessonResolver]

})
export class AppModule {}
