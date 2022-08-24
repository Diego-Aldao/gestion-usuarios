import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormat from 'ajv-formats';
import addErrors from 'ajv-errors';
import { emailDtoSchema, passwordDtoSchema } from '#Lib/dto.types.js';

const loginDTOSchema = Type.Object(
    {
        email: emailDtoSchema,
        password: passwordDtoSchema,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'El formato del objeto no es válido',
        },
    }
);

const ajv = new Ajv({ allErrors: true });

ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

addFormat(ajv, ['email']).addKeyword('kind').addKeyword('modifier');

addErrors(ajv);

const schemaValidacion = ajv.compile(loginDTOSchema);

const userLoginDTO = (req, res, next) => {
    const isDTOValid = schemaValidacion(req.body);

    if (!isDTOValid)
        return res.status(400).send({
            errors: schemaValidacion.errors.map((error) => error.message),
        });

    next();
};

export default userLoginDTO;
