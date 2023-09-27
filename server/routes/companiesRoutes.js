import express from 'express';
import path from 'path';


import CompaniesController from '../controllers/companies.js';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Endpoint to get all companies
// router.get('/', (req, res) => {
//     res.status(200).json(companies);
// });

router.get('/', CompaniesController.getCompanies);

// Endpoint to get all companies
router.get('/', (req, res) => {
    res.status(200).json(companies);
});

// Endpoint to get a specific company by ID and serve its details page
router.get('/:companiesId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/company.html'))
  })


export default router;


