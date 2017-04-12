const mysql = require('mysql');

const dbHost = process.env.DATABASE_HOST;
const dbPort = process.env.DATABASE_PORT;
const dbUser = process.env.DATABASE_USER;
const dbPass = process.env.DATABASE_PASS;
const dbName = process.env.DATABASE_NAME;

let connection;

const init = ({ host, port, user, password, database } = {
  host: dbHost,
  port: dbPort,
	user: dbUser,
	password: dbPass,
  database: dbName
}) => {
	connection = mysql.createConnection({
		host,
		port,
		user,
		password,
		database
	});

  // For a real world app, you probably want to check if there were any
  // any exceptions and handle them...
	createTable();
};

const createTableStmt = `
CREATE TABLE IF NOT EXISTS comments (
	id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
	author VARCHAR(100) NOT NULL,
	body TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
)
`;

const createTable = () => new Promise((resolve, reject) => {
	connection.query(createTableStmt, err => {
		if (err) {
			return reject(err);
		}

		return resolve();
	});
});

const addNewPost = (author, body) => new Promise((resolve, reject) => {
	connection.query('INSERT INTO comments SET ?', { author, body }, err => {
		if (err) {
			return reject(err);
		}

		return resolve();
	});
});

const getPosts = () => new Promise((resolve, reject) => {
	connection.query('SELECT * FROM comments', (err, results) => {
		if (err) {
			return reject(err);
		}

		return resolve(results);
	});
});

const getPostById = id => new Promise((resolve, reject) => {
	connection.query(
		'SELECT * FROM comments WHERE id = ? LIMIT 1',
		[id],
		(err, results) => {
			if (err) {
				return reject(err);
			}

			return resolve(results);
		}
	);
});

module.exports = { init, addNewPost, getPosts, getPostById }
