import express from 'express';
import { Card } from '../db/models';

const router = express.Router();

router.get('/cards', async (req, res) => {
  const cards = await Card.findAll({ order: [['updatedAt', 'DESC']] });
  res.json(cards);
});

export default router;
