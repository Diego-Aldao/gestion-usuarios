import UserModel from '#Schemas/user.schema.js';

const userUpdateController = async (req, res) => {
    const { id } = req;
    const { nombre, apellido } = req.body;

    const userExistebyId = await UserModel.findById(id).exec();
    if (!userExistebyId)
        return res.status(401).send({ errors: ['Usuario no autorizado'] });

    userExistebyId.nombre = nombre;
    userExistebyId.apellido = apellido;

    await userExistebyId.save();

    return res.send('Usuario Actualizado');
};

export default userUpdateController;
