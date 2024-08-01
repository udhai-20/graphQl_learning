import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entity/lesson.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([Lesson])    
    ],
    providers:[LessonResolver,LessonService],
    exports:[LessonService]
})
export class LessonModule {
   
}
