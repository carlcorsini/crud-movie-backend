exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('movie').insert([
        {
          id: 1,
          title: 'star warz',
          director: 'george lucas',
          year: 2016,
          rating: 5,
          image_url:
            'https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._SL1347_.jpg'
        },
        {
          id: 2,
          title: 'the life aquatic',
          director: 'wes anderson',
          year: 2000,
          rating: 5,
          image_url:
            'https://images-na.ssl-images-amazon.com/images/I/51ltSH%2B%2BjKL.jpg'
        },
        {
          id: 3,
          title: 'pulp fiction',
          director: 'quentin tarantino',
          year: 1986,
          rating: 5,
          image_url:
            'https://images-na.ssl-images-amazon.com/images/I/51SKHxkZCNL.jpg'
        }
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"movie_id_seq"', (SELECT MAX("id") FROM "movie"))`
      )
    )
}
