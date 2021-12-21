import express from "express";
import morgan from "morgan";
import cors from "cors";
import indexRoutes from "./routes/index";
import tasksRoutes from "./routes/tasks";

class Application {

    app: express.Application;

    public constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set("port", 8080)
    }

   private middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(cors());
    }

    private routes() {
        this.app.use(indexRoutes);
        this.app.use("/tasks", tasksRoutes);
    }

   start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server running on port", this.app.get("port"));
        })
    }
}

export default Application;