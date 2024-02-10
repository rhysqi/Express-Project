import { Request, Response, NextFunction } from 'express';
import { configDotenv } from 'dotenv';

configDotenv();

const user = process.env.USERNAME;
const pass = process.env.PASSWORD;

// Middleware for authentication
const Authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Basic ')) {
        // Get credentials
        const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        const username = credentials[0];
        const password = credentials[1];

        // Credentials validation
        if (username === user && password === pass) {
            // Jika kredensial valid, lanjutkan ke handler berikutnya
            return next();
        }
    }
    // If credentials not valid
    res.set('WWW-Authenticate', 'Basic realm="Restricted Area"');
    return res.status(401).send('Authentication required for login.');
};

export default Authenticate;