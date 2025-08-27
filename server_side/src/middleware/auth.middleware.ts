import { Context, Next } from "hono";
import { getAuth } from 'firebase-admin/auth';
import '../config/firebase.config';               // <-- just import to initialize


export const verifyToken = async (c: Context, next: Next) => {
    try {
        const authHeader = c.req.header('authorization');
        if (!authHeader) {
            return c.json({ message: 'Authorization header is missing' }, 401);
        };
        const token = authHeader.split(' ')[1];
        const decodedToken = await getAuth().verifyIdToken(token);
        c.set('user', decodedToken);
        await next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return c.json({ message: 'Unauthorized' }, 401);
    };
};