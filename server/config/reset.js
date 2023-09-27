import {pool} from './database.js'
import "dotenv/config.js"
import companies from '../data/companies.js'
const createCompaniesTable = async () => {
    try {
        const res = await pool.query(`CREATE TABLE IF NOT EXISTS companies (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            logo VARCHAR(255),
            website VARCHAR(255),
            description VARCHAR(255)
        )`)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

const insertCompaniesData = async () => {
    await createCompaniesTable()
    companies.forEach(async (company) => {
        
        
            const res = await pool.query(`INSERT INTO companies (name, logo, missionstatement, lobbyingspend2021) VALUES ($1, $2, $3, $4)`)
            const values = [company.name, company.logo, company.missionstatement, company.lobbyingspend2021]
            pool.query(insertQuery, values, (err,res) => {
                if(err){
                    console.error('⚠️ error inserting gift', err)
                    return
                }
                console.log(`✅ ${company.name} added successfully`)
            })
            console.log(res)
        
    }
    )
}

insertCompaniesData();

    