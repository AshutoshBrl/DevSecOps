import { ITodo } from '../domain/todo';
import TodoModel from '../models/TodoModel';

export class TodoService {
  public static async getAllTodos(): Promise<{ todos: ITodo[]; message: string }> {
    const todos = await TodoModel.getAllTodo();

    return {
      todos,
      message: 'Todos fetched successfully',
    };
  }

  public static async addTodo(task: string, isCompleted: boolean = false): Promise<{ todo: ITodo; message: string }> {
    const [insertedTodo] = await TodoModel.addTodo(task, isCompleted);

    return {
      todo: insertedTodo,
      message: 'Todo added successfully',
    };
  }

  public static async updateTodo(id: number, task: string, isCompleted: boolean): Promise<{ todo: ITodo; message: string }> {
    const [updatedTodo] = await TodoModel.updateTodo(id, task, isCompleted);

    return {
      todo: updatedTodo,
      message: 'Todo updated successfully',
    };
  }

  public static async deleteTodo(id: number): Promise<{ message: string }> {
    await TodoModel.deleteTodo(id);

    return {
      message: 'Todo deleted successfully',
    };
  }
}
