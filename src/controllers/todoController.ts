import { NextFunction, Request, Response } from 'express';

import {TodoService} from '../services/userService';

export const getAllTodos = (req: Request, res: Response, next: NextFunction) => {
  TodoService
    .getAllTodos()
    .then(data => res.json(data))
    .catch(err => next(err));
};

export const addTodo = (req: Request, res: Response, next: NextFunction) => {
const task = req.body.task;
TodoService.addTodo(task)
.then(data=>res.json(data))
.catch(err=>next(err));

};

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  TodoService.deleteTodo(id)
  .then(data=>res.json(data))
  .catch(err=>next(err));
};

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const task = req.body.task;
  const isCompleted =req.body.isCompleted;

  TodoService.updateTodo(id,task,isCompleted)
  .then(data=>res.json(data))
  .catch(err=>next(err));
};