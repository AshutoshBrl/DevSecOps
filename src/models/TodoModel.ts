import knex from "../db/knex";

class Todo {
  public static table = "todo";

  public static async getAllTodo() {
    const todos = await knex(this.table).select();

    return todos;
  }

  public static async addTodo(task: string, isCompleted: boolean= false) {
    const insertedTodo = await knex(this.table)
      .insert({
        task: task,
      })
      .returning("*");

    return insertedTodo;
  }

  public static async updateTodo(id: number, task: string, isCompleted: boolean) {
    const updatedTodo = await knex(this.table)
      .where('id', id)
      .update({
        task: task,
        isCompleted: isCompleted,
      })
      .returning("*");

    return updatedTodo;
  }

  public static async deleteTodo(id: number) {
    const deletedTodo = await knex(this.table)
      .where('id', id )
      .del()
      .returning("*");

    return deletedTodo;
  }
}

export default Todo; 