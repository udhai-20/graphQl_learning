import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entity/lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepo: Repository<Lesson>,
  ) {}
async getLesson(id:string){
    return await this.lessonRepo.findOne({where:{id}})
}

async getAllLesson(){
    return await this.lessonRepo.find()
}
  async create(name: string, startDate: string, endDate: string):Promise<Lesson> {
    const lesson = this.lessonRepo.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    return this.lessonRepo.save(lesson);
  }
}
