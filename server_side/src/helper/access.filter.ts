import { Context } from "hono";

export const checkAccess = (c: Context) => {
    const getLogedInUser = c.get('user');
    return getLogedInUser.firebase.sign_in_provider !== 'anonymous';
};