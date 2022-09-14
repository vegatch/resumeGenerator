
const mysql = require('mysql');
require('dotenv').config();


// const pool = mysql.createPool({
//   connectionLimit: process.env.CONNECTION_LIMIT,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database:process.env.MYSQL_DB,
//   port: process.env.DB_PORT
// });

// pool.getConnection(async (err,connection)=> {
//   if(err)
//   throw err;
//   console.log('Database connected successfully');
//  await  connection.release();
// //   connection.end();
//   connection.destroy();
// });

const connection = mysql.createConnection(process.env.JAWSDB_URL)
module.exports = pool;