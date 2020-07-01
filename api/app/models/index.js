// ambil config
const dbConfig = require("../config/db.config.js");

// ambil package aja
const Sequelize = require("sequelize");

// gunain sequelize dan setting nya
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorAliases: false,

	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.min,
		idle: dbConfig.pool.idle
	}
});

// buat objeck db
const db = {};

// manggil sequelize
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// mengkoneksikan model orm yang akan digunakan
db.posts = require("./post.model.js")(sequelize, Sequelize);

module.exports = db;
