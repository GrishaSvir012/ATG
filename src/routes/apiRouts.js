import express from 'express';
import bcrypt from 'bcrypt';
import template from '../template';
import { Card, User } from '../db/models';
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
});

router.post('/signin', async (req, res) => {
  const currentUser = await User.findOne({
    where: {
      eMail: req.body.eMail,
    },
  });
  if (currentUser) {
    const checkPass = await bcrypt.compare(req.body.password, currentUser.password);
    if (checkPass) {
      req.session.name = currentUser?.name;
      res.json({ name: currentUser?.name });
    }
    else {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(404);
  }
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

router.get('/percAcc', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  console.log('req.originalUrl', req.originalUrl);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sId');
});

export default router;
