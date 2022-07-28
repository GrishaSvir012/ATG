import express from 'express';
import template from '../template';
import { Card } from '../db/models';

router.get('/api/v1', async (req, res) => {
  const cards = await Card.findAll({ order: [['updatedAt', 'DESC']] });
  res.json(cards);
});

router.get('/api/v1', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  console.log('req.originalUrl', req.originalUrl);
});

export default router;
