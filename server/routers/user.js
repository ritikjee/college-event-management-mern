import express from 'express';
import { getUserById,getAllUsers,registerUser,loginUser } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

export default userRouter;