const mysql = require('mysql2/promise');

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'AsobitaiYoru27!',
    database: 'projeto_musica'

  });

