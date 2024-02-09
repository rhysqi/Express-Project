import { Request, Response, NextFunction } from 'express';
import { configDotenv } from 'dotenv';

configDotenv();

const user = process.env.USERNAME;
const pass = process.env.PASSWORD;

// Middleware untuk autentikasi dasar
export const Authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Basic ')) {
        // Mendapatkan kredensial pengguna dari header Authorization
        const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        const username = credentials[0];
        const password = credentials[1];

        // Misalnya, lakukan validasi kredensial di sini
        if (username === user && password === pass) {
            // Jika kredensial valid, lanjutkan ke handler berikutnya
            return next();
        }
    }

    // Jika kredensial tidak valid, kirim respons status 401 (Unauthorized)
    // dan header WWW-Authenticate untuk meminta kredensial dari klien
    res.set('WWW-Authenticate', 'Basic realm="Restricted Area"');
    return res.status(401).send('Authentication required.');
};
