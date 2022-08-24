import userDeleteDTO from '#Dto/user.delete.dto.js';
import userJWTDTO from '#Dto/user.jwt.dto.js';
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

userRouter.get('/perfil', userJWTDTO);

userRouter.patch('/actualizar-datos', userJWTDTO, updateDataDTO);
userRouter.patch('/actualizar-email', userJWTDTO, updateEmailDTO);
userRouter.patch('/actualizar-password', userJWTDTO, updatePasswordDTO);

userRouter.delete('/baja', userDeleteDTO);

export default userRouter;
