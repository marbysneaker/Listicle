import dotenv from 'dotenv'
dotenv.config();
console.log("users", process.env.PGUSER);
dotenv.config({ path: '../.env' })