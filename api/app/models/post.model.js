module.exports = (sequelize, Sequelize) => {
	const Post = sequelize.define("mhs", {
		nim:{
			type: Sequelize.STRING
		},
		nama: {
			type: Sequelize.STRING
		}
	});

	return Post;
}