import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './entity/lesson.type';
import { LessonService } from './lesson.service';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((returns) => LessonType)
  async lesson(@Args('id') id: string) {
    return await this.lessonService.getLesson(id);
  }

  @Query((returns)=>[LessonType])
  async lessons(){

    return await this.lessonService.getAllLesson()

  }

  @Mutation((returns) => LessonType)
  async createLessons(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') enDate: string,
  ) {
    return await this.lessonService.create(name, startDate, enDate);
  }
}
