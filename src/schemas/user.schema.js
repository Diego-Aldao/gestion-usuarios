import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    _id: {
        type: String,
        _id: false,
    } /* para crear un id manual, y el id false para decirle a mongodb que no me cree un id automatico */,
    nombre: { type: String, require: true, minLength: 2, maxLength: 20 },
    apellido: { type: String, require: true, minLength: 4, maxLength: 50 },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
});

const userModel = model('user', userSchema);

export default userModel;
