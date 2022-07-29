import express from 'express';
import bcrypt from 'bcrypt';
import template from '../template';
import {
  Card, User, Basket, sequelize,
} from '../db/models';

const router = express.Router();

router.get('/cards', async (req, res) => {
  const cards = await Card.findAll({ order: [['updatedAt', 'DESC']] });
  res.json(cards);
});
router.get('/basket1', async (req, res) => {
  const sum = await User.findOne({
    where: {
      id: req.session.userId,
    },
    include: {
      model: Basket,
      include: Card,
    },
  });
  const sumArray = JSON.parse(JSON.stringify(sum));
  const cards = await Basket.findAll({
    group: ['Basket.id', 'Card.id'],
    attributes: [[sequelize.fn('SUM', sequelize.col('Card.cost')), 'cost']],
    where: {
      user_id: req.session.userId,
    },
    include: Card,
  });
  const summ = sumArray.Baskets.reduce((acc, el) => acc + el.Card.cost, 0);
  res.json({ cards, summ });
});

router.get('/cart', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  console.log('req.originalUrl', req.originalUrl);
});
router.post('/basket', async (req, res) => {
  const currentBasket = await Basket.create({
    user_id: req.body.authUser.userId,
    card_id: req.body.card.id,
  });
  res.status(200);
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

  req.session.userId = currentUser?.id;
  console.log(req.session, 'session!=====================');
  // Сохраняем в сессию какую-то информацию и актвиируем её
  // req.session.userId = currentUser.id;
  res.json({ userId: currentUser.id, usernameSession: currentUser.name, name: currentUser.name });
});

router.get('/percAcc', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  console.log('req.originalUrl', req.originalUrl);
});

export default router;
