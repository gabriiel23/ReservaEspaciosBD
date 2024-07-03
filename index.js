import express from 'express';
import cors from 'cors';

import sedeRoutes from './routes/sedeRoutes.js';
import reservaRoutes from './routes/reservaRoutes.js';
import espacioRoutes from './routes/espacioRoutes.js';
import categoriaRoute from './routes/categoriaRoute.js'; 
import reseniaRoutes from './routes/reseniaRoutes.js';
import autentificacionRoute from './routes/autentificacionRoute.js';
import facultadRoute from './routes/facultadRoute.js';
import horarioRoute from './routes/horarioRoute.js';
import notificacionRoute from './routes/notificacionRoute.js';
import usuarioRoute from './routes/usuarioRoute.js';

import config from './config.js';

const app = express();

app.use(cors());
app.use(express.json());

// RUTAS

app.use('/api', sedeRoutes);
app.use('/api', reseniaRoutes);
app.use('/api', reservaRoutes);
app.use('/api', espacioRoutes);
app.use('/api', categoriaRoute);

app.use('/api', autentificacionRoute);
app.use('/api', facultadRoute);
app.use('/api', horarioRoute);
app.use('/api', notificacionRoute);
app.use('/api', usuarioRoute);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
