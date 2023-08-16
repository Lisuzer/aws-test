import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { router } from './routes/routes';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));

export { app };
