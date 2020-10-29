import  express from 'express';
import config from "config";
import sequelize  from './DBconnection';

const PORT = config.get('port') || 4000;
const server = express()

//@ts-ignore
server.use(express.json({ extended: true }));
server.use('/api/auth', require('./routes/auth.routes'));

  async function startServer(){
      try {
          await sequelize.sync()
          server.listen(PORT, ()=> console.log(`Server is started to://localhost:${PORT}`) )

      } catch (err){
          console.error(err)
      }
    }
  startServer()

