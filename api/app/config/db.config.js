// set config db & pool
module.exports = {
	HOST: "localhost",
	user: "root",
	PASSWORD: "",
	DB: "latihan_api",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle:10000
	}
};