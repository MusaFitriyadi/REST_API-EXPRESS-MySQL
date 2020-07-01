// panggil models
const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

// create
exports.create = (req, res) => {

	// Validasi 
	if (!req.body.nim) {
		res.status(400).send({
			message: "Data Kosong COY !"
		});
		return;
	}

	// ambil data
	const post = {
		nim: req.body.nim,
		nama: req.body.nama,
	}

	// create object post
	Post.create(post)
		.then((res) => {
			res.send(result);
		}).catch((err) => {
			res.status(500).send({
				message:
					err.message || "Error Post"
			});
		});
};

// retrieve all
exports.findAll = (req, res) => {

};

// cari satu data
exports.findOne = (req, res) => {

};

// update post with ID
exports.update = (req, res) => {

};

// delete data
exports.delete = (req, res) => {

};

// delete semua data
exports.deleteAll = (req, res) => {

};

// find nim
exports.findNim = (req, res) => {

};
