import { Router } from 'express';

import * as todoController from '../controllers/todoController';

const router = Router();

router.get('/', todoController.getAllTodos);

router.post('/', todoController.addTodo);

router.delete('/:id', todoController.deleteTodo);

router.put('/:id', todoController.updateTodo);

export default router;
