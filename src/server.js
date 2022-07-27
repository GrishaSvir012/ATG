import express from 'express';
import morgan from 'morgan';
import template from './template';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(template({ path: req.originalUrl }));
});

app.listen(PORT, () => {
  console.log(`App has started on port ${PORT}`);
});
