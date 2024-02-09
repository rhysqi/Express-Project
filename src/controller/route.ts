import express, { Request, Response, NextFunction } from "express";

export function End_Login(req: Request, res: Response){
    // Middleware Authenticate
	res.redirect('/dashboard');
	res.send('Login success !')
}

export function End_Logout(req: Request, res: Response){
    // Logout
    let head = res.setHeader('WWW-Authenticate', 'Basic realm="Restricted Area"');
	res.status(401).send('Please Login !');
}
