import express, { Request, Response, NextFunction } from "express";

export function Login(req: Request, res: Response, next: NextFunction){
    // Middleware Authenticate
	res.redirect('/dashboard');
	return next;
}

export function Logout(req: Request, res: Response, next: NextFunction){
    // Logout
    res.setHeader('WWW-Authenticate', 'Basic realm="Restricted Area"');
	res.status(401).send('Logout success !');
	return next;
}

export const Dashboard = (req: Request, res: Response, next: NextFunction) => {
	res.send("This is Dashboard");
	return next;
}

const Dashboard_DB = (req: Request, res: Response) => {
	res.send("This is database");
}

export function Init(app: express.Application){
	app.get('/dashboard', Dashboard);
	app.get('/dashboard/db', Dashboard_DB);
}