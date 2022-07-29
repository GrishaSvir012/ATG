import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';
import template from './template';
import apiRouter from './routes/apiRouts';
import newRouter from './routes/newRouter';
import authCheck from './components/middlewares/authCheck';
import _ from 'lodash';
import indexRouter from './routes/indexRouter';

const app = express();
const PORT = 3000;
const FileStore = store(session);

app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({extended: true}));
app.use(express.json());

const sessionConfig = {
  name: 'user_sid', 				// Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: 'andromeda' ?? 'test',	// Секретное слово для шифрования, может быть любым
  resave: true, 				// Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, 		// Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, 				// Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));

app.get('/', (req, res) => {
  console.log(req.session);
  res.send(template({ path: req.originalUrl, userId: req.session?.userId, usernameSession: req.session?.name }));
});


app.use('/api/v1', apiRouter);
app.use('/cart', newRouter);

app.use(authCheck);



app.listen(PORT, () => {
  console.log(`App has started on port ${PORT}`);
});


