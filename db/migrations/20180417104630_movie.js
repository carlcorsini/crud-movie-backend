exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', table => {
    table.increments()
    table.text('title').notNullable()
    table.text('director').notNullable()
    table.integer('year').defaultTo(0)
    table.integer('rating').defaultTo(0)
    table.text('image_url').defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movie')
}
