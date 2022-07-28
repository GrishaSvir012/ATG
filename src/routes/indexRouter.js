import express from 'express';
import template from '../template';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  console.log('req.originalUrl', req.originalUrl);
});

router.post('/signup', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  console.log('req.originalUrl', req.originalUrl);
});

router.get('/signin', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  console.log('req.originalUrl', req.originalUrl);
});

// router.get('/percAcc', (req, res) => {
//   res.send(template({ path: req.originalUrl }));
//   console.log('req.originalUrl', req.originalUrl);
// });

router.get('/card', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  console.log('req.originalUrl', req.originalUrl);
});

export default router;
