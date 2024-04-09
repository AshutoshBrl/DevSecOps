import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    await knex.schema.createTable('todo', (table) => {
        table.increments().notNullable();
        table.string('task').notNullable();;
        table.boolean('isCompleted').notNullable().defaultTo(false);
    });
}



export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('todo');
}