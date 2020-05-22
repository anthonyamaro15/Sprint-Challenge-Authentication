exports.seed = function (knex) {
  // Inserts seed entries
  return knex("users").insert([{ username: "test22", password: "test22" }]);
};
