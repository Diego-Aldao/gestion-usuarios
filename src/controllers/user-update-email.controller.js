import UserModel from '#Schemas/user.schema.js';
import { compare } from 'bcrypt';

const emailUpdateController = async (req, res) => {
    const { id } = req;
    const { email, password } = req.body;

    const userExistebyId = await UserModel.findById(id).exec();
    if (!userExistebyId)
        return res.status(401).send({ errors: ['Usuario no autorizado'] });

    const chequearPassword = await compare(password, userExistebyId.password);

    if (!chequearPassword)
        return res.status(401).send({ errors: ['Credenciales incorrectas'] });

    userExistebyId.email = email;

    await userExistebyId.save();

    return res.send('Email Actualizado');
};

export default emailUpdateController;
