import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

import alunoController from './controller/alunoController.js';
servidor.use(alunoController);

servidor.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));
import { con } from './repository/connection.js'