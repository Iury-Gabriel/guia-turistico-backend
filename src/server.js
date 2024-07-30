import express from 'express';
import cors from 'cors';
import routes from './routes';

class Server {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api', routes);
  }

  start() {
    const PORT = process.env.PORT || 3000;
    this.app.listen({ PORT, host: '0.0.0.0' }, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  }
}

const server = new Server();
server.start();
