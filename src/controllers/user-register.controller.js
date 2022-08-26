import UserModel from '#Schemas/user.schema.js';
import { hash } from 'bcrypt';

const userRegisterController = async (req, res) => {
    const { _id, nombre, apellido, email, password } = req.body;

    const userExistebyId = await UserModel.findById(_id).exec();
    if (userExistebyId) return res.status(409).send('Usuario existente');

    const userExistebyEmail = await UserModel.findOne({ email }).exec();
    if (userExistebyEmail) return res.status(409).send('Email Registrado');

    const hashedPassword = await hash(password, 12);
    const user = new UserModel({
        _id,
        nombre,
        apellido,
        email,
        password: hashedPassword,
    });
    await user.save();

    return res.STATUS(201).send('Usuario registrado con exito');
};

export default userRegisterController;
