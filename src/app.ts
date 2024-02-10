import express, { Request, Response } from 'express';
import { configDotenv } from 'dotenv';

import { Dashboard, Dashboard_DB, Login, Logout } from './controller/route';
import Authenticate from './controller/validate';

configDotenv();
const app = express();
const url = process.env.WEB_URL;
const port = process.env.WEB_PORT;

// Base Endpoint
app.get('/', (req: Request, res: Response) => {
    res.send('Hello !');
});

// Authorization
app.use(Authenticate);

// Need authentication to access endpoint
app.get('/login', Login, Authenticate);

app.get('/dashboard', Dashboard);
app.get('/dashboard/db', Dashboard_DB);

app.get('/logout', Logout);

app.listen(port, () => {
    console.log(`Server is listening on ${url}:${port}`);
});
