import connectDB from '#Config/db.js';
import './config/dotenv.js';
import httpServer from './config/http.js';

const bootstrap = async () => {
    await connectDB(process.env.MONGODB_URL);

    httpServer.listen(process.env.PUERTO, () => {
        console.log('escuchando en el puerto');
    });
};

bootstrap();
