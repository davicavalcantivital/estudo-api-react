import mysql from 'mysql2/promise'; 

const con = await mysql.createConnection({
    host: process.env.HOST_LOCAL,
    user: process.env.USER_LOCAL,
    password: process.env.PWD_LOCAL,
    database: process.env.DB_LOCAL
})

console.log('BD conectado na porta ' + process.env.PORT);

export { con };