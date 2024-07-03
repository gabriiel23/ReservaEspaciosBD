import express from 'express';
import cors from 'cors';

import config from './config.js';
import sedeRoute from './routes/sedeRoutes.js';
import reservaRoute from './routes/reservaRoutes.js';
import espacioRoute from './routes/espacioRoutes.js';
import categoriaRoute from './routes/categoriaRoute.js'; 
import reseniaRoute from './routes/reseniaRoutes.js';

const app = express();

// RUTAS

app.use(cors());
app.use(express.json());
app.use('/api', sedeRoute);
app.use('/api', reseniaRoute);
app.use('/api', reservaRoute);
app.use('/api', espacioRoute);
app.use('/api', categoriaRoute);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
