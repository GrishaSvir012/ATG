import express from 'express';
import template from '../template';
import { Card } from '../db/models';
import path from 'path'
import upload from '../middleWars/multer';


const router = express.Router();

router.get('/cards', async (req, res) => {
  const cards = await Card.findAll({ order: [['updatedAt', 'DESC']] });
  res.json(cards);
});


router.post('/cards', upload.single('avatar'), async (req, res) => {

  console.log(req.body);
  console.log('----------->', req.file);
  const cards = await Card.create({ nameCard: req.body.cardName, status: req.body.stepen, cost: req.body.price, img: req.file?.path.replace('public', '') });
  res.sendStatus(200);
});

router.get('/cart', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  console.log('req.originalUrl', req.originalUrl);
})


export default router;
