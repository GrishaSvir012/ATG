import express from 'express';
import template from '../template';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  console.log('req.originalUrl', req.originalUrl);
});

router.get('/', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  console.log('req.originalUrl', req.originalUrl);
});

export default router;
