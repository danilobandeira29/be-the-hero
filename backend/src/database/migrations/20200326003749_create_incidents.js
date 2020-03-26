
exports.up = function(knex) {
  return knex.schema.createTable('incidents', (table) => {
    table.increments(); // primary key autoincrement;

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable(); // relationship with table ongs
    table.foreign('ong_id').references('id').inTable('ongs'); //pegando a chave estrangeira da  tabela ongs e colocando na coluna ong_id
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
