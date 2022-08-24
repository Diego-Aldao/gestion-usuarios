import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormat from 'ajv-formats';
import addErrors from 'ajv-errors';

const registroDTOSchema = Type.Object({
    _id: Type.String({
        format: 'uuid',
        errorMessage: {
            type: 'El tipo de _id no es valido, debe ser String',
            format: 'El formato de _id no es valido, debe ser uuid4',
        },
    }),
    name: Type.String({
        minLength: 2,
        maxLength: 20,
        errorMessage: {
            minLength:
                'el nombre debe tener por lo menos 2 caracteres de longitud',
            maxLength:
                'el nombre debe tener como máximo 20 caracteres de longitud',
        },
    }),
    apellido: Type.String({
        minLength: 4,
        maxLength: 50,
        errorMessage: {
            minLength:
                'el apellido debe tener por lo menos 4 caracteres de longitud',
            maxLength:
                'el apellido debe tener como máximo 50 caracteres de longitud',
        },
    }),
    email: Type.String({
        format: 'email',
        errorMessage: {
            type: 'El tipo del email no es valido, debe ser String',
            format: 'El formato del email no es valido, ebe cumplir el RFC 5322',
        },
    }),
    password: Type.String({
        format: 'password',
        minLength: 10,
        maxLength: 25,
        errorMessage: {
            type: 'El tipo del password no es valido, debe ser String',
            format: 'El formato del password no es valido, debe contener una mayuscula, una minuscula y un numero',
            minLength:
                'el password debe tener por lo menos 10 caracteres de longitud',
            maxLength:
                'el password debe tener como máximo 25 caracteres de longitud',
        },
    }),
});

const ajv = new Ajv({ allErrors: true });

ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

addFormat(ajv, ['email', 'uuid']).addKeyword('kind').addKeyword('modifier');

addErrors(ajv);

const schemaValidacion = ajv.compile(registroDTOSchema);

const userRegistroDTO = (req, res, next) => {
    const isDTOValid = schemaValidacion(req.body);

    if (!isDTOValid)
        return res
            .status(400)
            .send({
                errors: schemaValidacion.errors.map((error) => error.message),
            });

    next();
};

export default userRegistroDTO;
