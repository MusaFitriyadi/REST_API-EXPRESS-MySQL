// penting
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// manggil models db
const db = require("./app/models/");

// untuk menggunakan express
const app = express();

// yang di izinkan menggunakan api
let whiteList = [
	'http://localhost:8080',
];

let corsOption = {
	origin: function (origin, callback) {
		// jika berhasil
		if(whiteList.indexOf(origin) !== -1 || !origin){
			callback(null, true);
		}
		// jika tidak diizinkan
		else {
			callback(new Error("Not Allowerd by CORS"));
		}
	}
};

// menggunakan cors
app.use(cors(corsOption));

// parse request application/json & x--www-form-urlencode
app.use(bodyParser.json());

// diberi extended biar bisa banyak
app.use(bodyParser.urlencoded({extended:true}));

// sync database, dimatiin agar tidak jalan buat db nya
// db.sequelize.sync();

// message jika berhasil
app.get("/", (req, res) => {
	res.json({
		message: "Selamat datang di ExMySQL"
	});
});

// panggil posts routes
require("./app/routes/post.routes.js")(app);

// set port
const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
	console.log(`Berhasil on http://localhost:${PORT}`);
});