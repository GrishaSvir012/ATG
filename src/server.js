import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());

