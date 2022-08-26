import { Type } from '@sinclair/typebox';

export const idDtoSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'El tipo de _id no es valido, debe ser String',
        format: 'El formato de _id no es valido, debe ser uuid4',
    },
});

export const nameDtoSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'el nombre debe tener por lo menos 2 caracteres de longitud',
        maxLength: 'el nombre debe tener como máximo 20 caracteres de longitud',
    },
});

export const apellidoDtoSchema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength:
            'el apellido debe tener por lo menos 4 caracteres de longitud',
        maxLength:
            'el apellido debe tener como máximo 50 caracteres de longitud',
    },
});

export const emailDtoSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'El tipo del email no es valido, debe ser String',
        format: 'El formato del email no es valido, ebe cumplir el RFC 5322',
    },
});

export const passwordDtoSchema = Type.String({
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
});
