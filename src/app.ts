import express, { Request, Response } from 'express';
import { configDotenv } from 'dotenv';

import { Init } from './controller/route';

configDotenv();
const app = express();
const url = process.env.WEB_URL;
const port = process.env.WEB_PORT;

// Initialization
Init(app);

app.listen(port, () => {
    console.log(`Server is listening on ${url}:${port}`);
});
