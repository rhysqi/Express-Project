
import express, { Request, Response } from "express";

const app = express();

app.get('/dashboard', (req: Request, res: Response) => {
	res.send('dashboard');
});