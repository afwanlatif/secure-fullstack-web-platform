import { Hono } from 'hono';
const app = new Hono();
import {
createUser,
updateUser,
getUsers,
fetchUser,
deleteUser
} from '../controller/user.controller'
import { verifyToken } from '../middleware/auth.middleware';

app.put('/add', verifyToken, createUser);
app.post('/update/:id', updateUser);
app.get('/lists', getUsers);
app.get('/get/:id', fetchUser);
app.delete('/delete/:id', deleteUser);


export default app;