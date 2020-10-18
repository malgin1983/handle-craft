import  express from 'express';
import config from "config";
import sequelize  from './DBconnection';

const PORT = config.get('port') || 4000;
const server = express()

  async function startServer(){
      try {
          await sequelize.sync()
          server.listen(PORT, ()=> console.log(`Server is started to://localhost:${PORT}`) )

      } catch (err){
          console.error(err)
      }
    }
  startServer()




// // @ts-ignore
// server.use(express.json({ extended: true }));

// server.use('/api/auth', require('./routes/auth.routes'));
// // server.use('api/link', require('./routes/link-router'));


// public routes(): void {
//     const router: express.Router = express.Router();

//     this.server.use('/', indexRoutes);
//     this.server.use('/api/posts', PostRouter);
//     this.server.use('/api/users', UserRoutes);
// }

