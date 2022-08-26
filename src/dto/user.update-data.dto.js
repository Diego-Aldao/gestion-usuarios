import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import { apellidoDtoSchema, nameDtoSchema } from '#Dto/dto.types.js';

const updateDataSchema = Type.Object(
    {
        nombre: nameDtoSchema,
        apellido: apellidoDtoSchema,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'El formato del objeto no es válido',
        },
    }
);

const ajv = new Ajv({ allErrors: true });

addErrors(ajv).addKeyword('kind').addKeyword('modifier');

const schemaValidacion = ajv.compile(updateDataSchema);

const updateDataDTO = (req, res, next) => {
    const isDTOValid = schemaValidacion(req.body);

    if (!isDTOValid)
        return res.status(400).send({
            errors: schemaValidacion.errors.map((error) => error.message),
        });

    next();
};

export default updateDataDTO;
