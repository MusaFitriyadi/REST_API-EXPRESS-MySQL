module.exports = app => {
	const posts = require("../controllers/post.controller.js");

	// inisialisasi router
	let router = require("express").Router();

	// create new post
	router.post("/", posts.create);

	// gunain objectnya, nentuukan prefix url nya
	app.use("/api/posts", router);
}