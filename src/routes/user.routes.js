import userDeleteDTO from '#Dto/user.delete.dto.js';
import userLoginDTO from '#Dto/user.login.dto.js';
import userRegistroDTO from '#Dto/user.registro.dto.js';
import updateDataDTO from '#Dto/user.update-data.dto.js';
import updateEmailDTO from '#Dto/user.update-email.dto.js';
import updatePasswordDTO from '#Dto/user.update-password.dto.js';
import { Router } from 'express';

const userRouter = Router();

userRouter.post('/registro', userRegistroDTO, (req, res) => {
    res.send();
});

userRouter.post('/login', userLoginDTO);

userRouter.get('/perfil');

userRouter.patch('/actualizar-datos', updateDataDTO);
userRouter.patch('/actualizar-email', updateEmailDTO);
userRouter.patch('/actualizar-password', updatePasswordDTO);

userRouter.delete('/baja', userDeleteDTO);

export default userRouter;
