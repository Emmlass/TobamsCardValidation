import { Router } from 'express';
import { validateCard } from '../controllers/card.controller';

const router = Router();

// POST /api/validate
router.post('/validate', validateCard);

export default router;