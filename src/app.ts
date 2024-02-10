import express, { Request, Response } from 'express';
import { configDotenv } from 'dotenv';

import { Init, Login, Logout } from './controller/route';
import Authenticate from './controller/validate';

configDotenv();
const app = express();
const url = process.env.WEB_URL;
const port = process.env.WEB_PORT;

// Start endpoint
app.get('/', (req: Request, res: Response) => {
    res.send('Hello !');
});

// Authorization
app.use(Authenticate);

// Need authentication to access endpoint
app.get('/login', Authenticate, Login);

// Initialization
Init(app);

app.get('/logout', Logout);

app.listen(port, () => {
    console.log(`Server is listening on ${url}:${port}`);
});
