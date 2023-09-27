import pg from 'pg'


const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    
}

console.log(config)

export const pool = new pg.Pool(config)