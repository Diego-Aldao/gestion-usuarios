import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.connect(url).then(() => console.log('conectado'));
};

export default connectDB;
