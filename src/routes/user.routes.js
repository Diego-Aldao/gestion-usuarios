import { Router } from 'express';

const userRouter = Router();

userRouter.post('/registro', (req, res) => {});

userRouter.post('/login');

userRouter.get('/perfil');

userRouter.patch('/actualizar-datos');
userRouter.patch('/actualizar-email');
userRouter.patch('/actualizar-password');

userRouter.delete('/baja');

export default userRouter;
