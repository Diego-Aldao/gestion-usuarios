import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import { passwordDtoSchema } from '#Dto/dto.types.js';

const updatePasswordSchema = Type.Object(
    {
        oldPassword: passwordDtoSchema,
        newPassword: passwordDtoSchema,
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

addErrors(ajv).addKeyword('kind').addKeyword('modifier');

const schemaValidacion = ajv.compile(updatePasswordSchema);

const updatePasswordDTO = (req, res, next) => {
    const isDTOValid = schemaValidacion(req.body);

    if (!isDTOValid)
        return res.status(400).send({
            errors: schemaValidacion.errors.map((error) => error.message),
        });

    next();
};

export default updatePasswordDTO;
