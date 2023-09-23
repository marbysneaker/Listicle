import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import companies from '../data/companies.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Endpoint to get all companies
router.get('/', (req, res) => {
    res.status(200).json(companies);
});

// Endpoint to get a specific company by ID and serve its details page
router.get('/:companyId', (req, res) => {
    const companyId = parseInt(req.params.companyId, 10);
    const company = companies.find(c => c.id === companyId);

    if (company) {
        res.status(200).sendFile(path.resolve(__dirname, '../public/company.html'));
    } else {
        res.status(404).send('Company not found');
    }
});

export default router;


