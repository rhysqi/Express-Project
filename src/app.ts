import express, { Request, Response, NextFunction } from 'express';
import { configDotenv } from 'dotenv';

import { End_Login, End_Logout } from './controller/route';
import { Authenticate } from './controller/validate';

configDotenv();
const app = express();
const url = process.env.WEB_URL;
const port = process.env.WEB_PORT;

// Base Endpoint
app.get('/', (req: Request, res: Response) => {
    res.send('Hello !');
});

// Authentication
app.use(Authenticate);

// Need authentication to access endpoint
app.get('/login', (req: Request, res: Response) => {
	End_Login(req, res);
});

app.get('/dashboard', (req: Request, res: Response) => {
	res.send('Welcome to dashboard');
});

// Logout
app.get('/logout', (req: Request, res: Response) => {
	End_Logout(req, res);
});

app.listen(port, () => {
    console.log(`Server is listening on ${url}:${port}`);
});
