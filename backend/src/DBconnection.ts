import config from "config";
import {connect} from 'mongoose';



export const  connection = async ():Promise<any>=> {
    try {
        await connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    } catch (e) {
        console.log('Ошибка  с сервера - ', e.message);
        process.exit(1)
    }
}

