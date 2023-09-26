import {pool} from './database.js'
import "dotenv/config.js"
import {companiesData} from './companiesData.js'

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
    companiesData.forEach(async (company) => {
        
            const res = await pool.query(`INSERT INTO companies (name, logo, website, description) VALUES ($1, $2, $3, $4)`)
            const values = [company.name, company.logo, company.website, company.description]
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

    