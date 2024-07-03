import express from 'express';
import cors from 'cors';

import config from './config.js';

const app = express();

// RUTAS

app.use(cors());
app.use(express.json());


app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
