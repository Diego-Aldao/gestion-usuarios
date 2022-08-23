import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    nombre: { type: String, require: true, minLength: 2, maxLength: 20 },
    apellido: { type: String, require: true, minLength: 4, maxLength: 50 },
    email: { type: String, require: true },
    password: { type: String, require: true },
});

const userModel = model('user', userSchema);

export default userModel;
