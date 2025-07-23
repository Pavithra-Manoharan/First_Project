import express from 'express';
import getStatus from '../query_implementation/status/getstatus.js';
import insertstatus from '../query_implementation/status/insertstatus.js';

const router = express.Router();

router.post('/status/insert',insertstatus);
router.get('/status', getStatus);

export default router;