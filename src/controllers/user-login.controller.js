import UserModel from '#Schemas/user.schema.js';
import { compare } from 'bcrypt';
import { SignJWT } from 'jose';

const userLoginController = async (req, res) => {
    const { email, password } = req.body;

    const userExistebyEmail = await UserModel.findOne({ email }).exec();

    if (!userExistebyEmail)
        return res.status(401).send({ errors: ['Credenciales incorrectas'] });

    const chequearPassword = await compare(
        password,
        userExistebyEmail.password
    );

    if (!chequearPassword)
        return res.status(401).send({ errors: ['Credenciales incorrectas'] });

    const jwtConstructor = new SignJWT({ id: userExistebyEmail._id });

    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
        .setProtectedHeader({
            alg: 'HS256',
            typ: 'JWT',
        })
        .setIssuedAt()
        .setExpirationTime('1d')
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

    return res.send({ jwt });
};

export default userLoginController;
