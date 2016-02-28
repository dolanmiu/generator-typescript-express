import * as express from "express";
import * as morgan from "morgan";
import * as compression from "compression";
import * as bodyParser from "body-parser";
import * as methodOverride from "method-override";
import * as cookieParser from "cookie-parser";
import * as errorHandler from "errorhandler";
import * as path from "path";
import * as session from "express-session";
import {IConfig} from "../config/environment";

export default class ApplicationFactory {
    newInstance(config: IConfig, env: string): express.Express {
        var app = express();

        app.set("views", config.root + "/server/views");
        app.set("view engine", "html");
        app.use(compression());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(methodOverride());
        app.use(cookieParser());

        // Persist sessions with mongoStore / sequelizeStore
        // We need to enable sessions for passport-twitter because it"s an
        // oauth 1.0 strategy, and Lusca depends on sessions
        /*app.use(session({
            secret: config.secrets.session,
            saveUninitialized: true,
            resave: false,
            store: new mongoStore({
                mongooseConnection: mongoose.connection,
                db: "opcrates-bot-server"
            })
        }));*/

        app.set("appPath", path.join(config.root, "client"));
        app.use(morgan("dev"));
        app.use(express.static(app.get("appPath")));

        if ("development" === env || "test" === env) {
            app.use(express.static(path.join(config.root, ".tmp")));
            app.use(errorHandler()); // Error handler - has to be last
        }

        return app;
    }
}