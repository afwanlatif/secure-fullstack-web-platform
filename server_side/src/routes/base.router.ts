import { Hono } from 'hono/tiny';
import UserRouter from './user.router';

export const setupRoutes = (app: Hono) => {
    app.route('/user', UserRouter);
}