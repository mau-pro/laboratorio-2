import dotevn from "dotenv";
import express, { Express } from "express";
dotevn.config();
class App {
    private app: Express;
    private port: number;
    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 8000;
        this.configure();
        this.startModules();
    }
    private configure() {
        this.app.use(express.json());
        this.app.use(express.urlencoded());
    }
    private startModules() {
        console.log("Load Modules!");
        //codigo de los diferentes modulos de proyecto
        this.app.get("/", (request, response) => {
            response.send("Hola Mi primer configuracion de docker");
        })
    }
    public getApp() {
        return this.app;
    }
    public getPort() {
        return this.port;
    }
}
export default App;