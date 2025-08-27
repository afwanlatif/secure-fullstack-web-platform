import { Context } from "hono"
import { UserModel } from '../model/user.model'
import bcrypt from 'bcryptjs'
import { checkAccess } from '../helper/access.filter'

// Add User

const createUser = async (c: Context) => {
    try {
        if (!checkAccess(c)) {
            return c.json({ message: 'anonymous user are not allowed to perform furhter actions' }, 401);
        }
        const userData = await c.req.json();
        if (!userData.name || !userData.email || !userData.password) {
            return c.json({ message: 'Required fields are missing' }, 400);
        };
        const existingUser = await UserModel.findOne({ where: { email: userData.email } });
        if (existingUser) {
            return c.json({ message: 'User already exists' }, 400);
        };
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const newUser = await UserModel.create({ ...userData, password: hashedPassword });
        return c.json({ message: 'User created successfully', user: newUser }, 201);
    } catch (error) {
        console.error('Error creating user:', error);
        return c.json({ message: 'Internal server error' }, 500);
    };
};

// Update User

const updateUser = async (c: Context) => {
    try {
        const UserId = c.req.param('id');
        const userData = await c.req.json();
        if (Object.keys(userData).length === 0) {
            return c.json({ message: 'Pass at least 1 field for updation' }, 400);
        };
        const user = await UserModel.findByPk(UserId);
        if (!user) {
            return c.json({ message: 'User not found' }, 404);
        };
        const updatedUser = await user.update(userData);
        return c.json({ message: 'User updated successfully', user: updatedUser }, 200);
    } catch (error) {
        console.error('Error creating user:', error);
        return c.json({ message: 'Internal server error' }, 500);
    };
};

// user List

const getUsers = async (c: Context) => {
    try {
        const users = await UserModel.findAll();
        return c.json({ users }, 200);
    } catch (error) {
        console.error('Error fetching users:', error);
        return c.json({ message: 'Internal server error' }, 500);
    };
};

// get User by ID

const fetchUser = async (c: Context) => {
    try {
        const UserId = c.req.param('id');
        const user = await UserModel.findByPk(UserId);
        if (!user) {
            return c.json({ message: 'User not found' }, 404);
        };
        return c.json({ user }, 200);
    } catch (error) {
        console.error('Error fetching user:', error);
        return c.json({ message: 'Internal server error' }, 500);
    };
};

// Delete User

const deleteUser = async (c: Context) => {
    try {
        const UserId = c.req.param('id');
        const user = await UserModel.findByPk(UserId);
        if (!user) {
            return c.json({ message: 'User not found' }, 404);
        };
        const userData = user.toJSON();
        await user.destroy();
        return c.json({ message: 'User deleted successfully', user: userData }, 200);
    } catch (error) {
        console.error('Error deleting user:', error);
        return c.json({ message: 'Internal server error' }, 500);
    };
};


export {
    createUser,
    updateUser,
    getUsers,
    fetchUser,
    deleteUser
};