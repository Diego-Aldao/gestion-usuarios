import UserModel from '#Schemas/user.schema.js';

const userPerfilController = async (req, res) => {
    const { id } = req;
    console.log(id);

    const userExistebyId = await UserModel.findById(id).exec();
    if (!userExistebyId)
        return res.status(401).send({ errors: ['Usuario no autorizado'] });

    const { _id, nombre, apellido, email } = userExistebyId;

    return res.send({ _id, nombre, apellido, email });
};

export default userPerfilController;
