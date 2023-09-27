import {pool} from '../config/database.js'

import "../config/dotenv.js"
import companies from '../data/companies.js'
const createCompaniesTable = async () => {
        const createTableQuery =
        `
        DROP TABLE IF EXISTS companies;

        CREATE TABLE IF NOT EXISTS companies (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            logo VARCHAR(255),
            missionstatement VARCHAR(255),
            lobbyingspend2021 VARCHAR(255)
        )`
    try {
        await pool.query(createTableQuery)
    console.log('🎉 companies table created successfully')

    }
    catch (error) {
        console.error('🚨 unable to create companies table:', error)
    }
}

const insertCompaniesData = async () => {
    await createCompaniesTable()
    companies.forEach(async (company) => {
        
            
            const insertQuery = {text:`INSERT INTO companies (name, logo, missionstatement, lobbyingspend2021) VALUES ($1, $2, $3, $4)`}
            const values = [company.companyName, company.logo, company.missionStatement, company.lobbyingSpend2021]

            console.log(`🏷 inserting company: ${company.companyName, company.logo, company.missionStatement, company.lobbyingSpend2021}`)
            pool.query(insertQuery, values, (err,res) => {
                if(err){
                    console.error('⚠️ error inserting gift', err)
                    return
                }
                console.log(`✅ ${company.name} added successfully`)
            })
        
    }
    )
}

insertCompaniesData();
