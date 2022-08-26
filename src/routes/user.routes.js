import userDeleteController from '#Controllers/user-delete.controller.js';
import userLoginController from '#Controllers/user-login.controller.js';
import userPerfilController from '#Controllers/user-profile.controller.js';
import userRegisterController from '#Controllers/user-register.controller.js';
import userUpdateController from '#Controllers/user-update-data.controller.js';
import emailUpdateController from '#Controllers/user-update-email.controller.js';
import passwordUpdateController from '#Controllers/user-update-password.controller.js';
import userDeleteDTO from '#Dto/user.delete.dto.js';
import userJWTDTO from '#Dto/user.jwt.dto.js';
import userLoginDTO from '#Dto/user.login.dto.js';
import userRegistroDTO from '#Dto/user.registro.dto.js';
import updateDataDTO from '#Dto/user.update-data.dto.js';
import updateEmailDTO from '#Dto/user.update-email.dto.js';
import updatePasswordDTO from '#Dto/user.update-password.dto.js';
import { Router } from 'express';

const userRouter = Router();

userRouter.post('/registro', userRegistroDTO, userRegisterController);

userRouter.post('/login', userLoginDTO, userLoginController);

userRouter.get('/perfil', userJWTDTO, userPerfilController);

userRouter.patch(
    '/actualizar-datos',
    userJWTDTO,
    updateDataDTO,
    userUpdateController
);
userRouter.patch(
    '/actualizar-email',
    userJWTDTO,
    updateEmailDTO,
    emailUpdateController
);
userRouter.patch(
    '/actualizar-password',
    userJWTDTO,
    updatePasswordDTO,
    passwordUpdateController
);

userRouter.delete('/baja', userJWTDTO, userDeleteDTO, userDeleteController);

export default userRouter;
