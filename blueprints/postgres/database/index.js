const pg = require('pg');

const dbHost = process.env.DATABASE_HOST;
const dbPort = process.env.DATABASE_PORT;
const dbUser = process.env.DATABASE_USER;
const dbPass = process.env.DATABASE_PASS;
const dbName = process.env.DATABASE_NAME;

let pool;

const init = ({ host, port, user, password, database } = {
  host: dbHost,
  port: dbPort,
  user: dbUser,
  password: dbPass,
  database: dbName
}) => {
  pool = new pg.Pool({
    host,
    port,
    user,
    password,
    database
  });

  return createTable();
};

const createTableStmt = `
CREATE TABLE IF NOT EXISTS comments (
  id serial PRIMARY KEY,
  author VARCHAR (100) NOT NULL,
  body VARCHAR (50) NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_DATE
)
`;

const createTable = () => pool.query(createTableStmt);

const addNewPost = (author, body) => pool
  .query(
    'INSERT INTO comments (author, body) VALUES ($1, $2) RETURNING id',
    [author, body]
  )
  .then(result => result.rows[0].id)
;

const getPosts = () => pool
  .query('SELECT * FROM comments')
  .then(result => result.rows)
;

const getPostById = id => {
  return pool
    .query('SELECT * FROM comments WHERE id = $1', [id])
    .then(result => {
      if (Array.isArray(result.rows)) {
        return result.rows[0];
      }

      return result;
    })
  ;
}

module.exports = { init, addNewPost, getPosts, getPostById }
