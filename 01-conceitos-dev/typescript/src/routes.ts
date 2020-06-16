import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'erick@minerai.com',
    password: '1235456',
    techs: ['ReactJS',
      'NodeJS',
      'React Native',
      { title: 'Javascript', experience: 100 },
    ],
  });

  return response.json({ message: 'Hello World!' });
}
