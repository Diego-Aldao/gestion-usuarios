import UserModel from '#Schemas/user.schema.js';
import { compare, hash } from 'bcrypt';

const passwordUpdateController = async (req, res) => {
    const { id } = req;
    const { oldPassword, newPassword } = req.body;

    const userExistebyId = await UserModel.findById(id).exec();
    if (!userExistebyId) return res.status(401).send('Usuario no autorizado');

    const chequearPassword = await compare(
        oldPassword,
        userExistebyId.password
    );

    if (!chequearPassword)
        return res.status(401).send({ errors: ['Credenciales incorrectas'] });

    const hashedPassword = await hash(newPassword, 12);
    userExistebyId.password = hashedPassword;

    await userExistebyId.save();

    return res.send('Contraseña Actualizado');
};

export default passwordUpdateController;
