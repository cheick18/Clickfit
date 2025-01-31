import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();
export const connectDB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.USER_NAME||'root',  
  password:process.env.DB_PASSWORD, 
  database: process.env.DB_NAME||'user_db'   
});
connectDB.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données: ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données avec l’ID ' + connectDB.threadId);
});


