import express from 'express';
import bcrypt from 'bcrypt';
import template from '../template';
import { Card, User } from '../db/models';

const router = express.Router();

router.get('/cards', async (req, res) => {
  const cards = await Card.findAll({ order: [['updatedAt', 'DESC']] });
  res.json(cards);
});

router.get('/cart', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  console.log('req.originalUrl', req.originalUrl);
});

router.post('/signin', async (req, res) => {
  const currentUser = await User.findOne({
    where: {
      eMail: req.body.eMail,
    },
  });
  req.session.name = currentUser?.name;
  res.json({ name: currentUser?.name });
});

router.post('/signup', async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 10);
  const [currentUser, created] = await User.findOrCreate({
    where: {
      eMail: req.body.eMail,
    },
    defaults: {
      name: req.body.name,
      password,
      city: req.body.city,
    },
  });
  req.session.name = currentUser?.name;
  // Сохраняем в сессию какую-то информацию и актвиируем её
  // req.session.userId = currentUser.id;
  res.json({ name: currentUser.name });
});

export default router;
