import express from 'express';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

const defaultPort = 3001;
const PORT = process.env.PORT || defaultPort;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

import v1Routes from './route';
app.use('/api/v1', v1Routes);

app.listen(PORT, () => {
  console.log('Server running at port : ' + PORT);
});
