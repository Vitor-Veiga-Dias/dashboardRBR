import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
export class Routes {
    public app: express.Application;
    private port: number;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
    }

    public async get<T extends express.RequestHandler>(path: string, handler: T): Promise<void> {
      this.app.get(path, handler);
    }

    public async  post(path: string, handler: express.RequestHandler): Promise<void> {
         this.app.post(path, handler);
    }

    public async  put(path: string, handler: express.RequestHandler): Promise<void> {
         this.app.put(path, handler);
    }

    public async  delete(path: string, handler: express.RequestHandler): Promise<void> {
         this.app.delete(path, handler);
    }

    public async  listen(): Promise<void> {
         this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
