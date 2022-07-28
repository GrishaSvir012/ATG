import express from 'express';
import morgan from 'morgan';
import path from 'path';
import template from './template';
import apiRouter from './routes/apiRouts';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1', apiRouter);

app.get('/', (req, res) => {
  res.send(template({ path: req.originalUrl }));
});

app.listen(PORT, () => {
  // console.log(__dirname);
  console.log(`App has started on port ${PORT}`);
});
