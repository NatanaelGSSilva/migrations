import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Lesson from '../models/Lesson';
import LessonRepository from '../repositories/LessonRepository';

const lessonRouter = Router();

lessonRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Lesson);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>>', err.message)
  }
});

lessonRouter.get('/', async (request, response) => {
  response.json(await getRepository(Lesson).find());
});

lessonRouter.get('/:description', async (request, response) => {
  const repository = getCustomRepository(LessonRepository);
  const res = await repository.findByDescription(request.params.description);

  response.json(res);
});

export default lessonRouter;
