import  express from 'express';
import config from "config";
import {connection}  from './DBconnection';

const PORT = config.get('port') || 4000;
const app = express()

  const  start = () => {
      app.get('/', (req, res) =>{
          res.send('Server started');
      })
      connection().then(e => console.log('База MONOGO подключена', e));
      app.listen(PORT, () => console.log(`также сервер запущен по http://localhost:${PORT}`))
    };
  start();




// // @ts-ignore
// app.use(express.json({ extended: true }));

// app.use('/api/auth', require('./routes/auth.routes'));
// // app.use('api/link', require('./routes/link-router'));


// public routes(): void {
//     const router: express.Router = express.Router();

//     this.app.use('/', indexRoutes);
//     this.app.use('/api/posts', PostRouter);
//     this.app.use('/api/users', UserRoutes);
// }

