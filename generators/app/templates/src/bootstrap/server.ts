import {IConfig} from "../config/environment";
import * as http from "http";

export default class Server {
    private server: http.Server;
    private config: IConfig;

    constructor(config: IConfig, server: http.Server) {
        this.server = server;
        this.config = config;
    }

    startServer() {
        this.server.listen(this.config.port, this.config.ip, () => {
            console.log("Express server listening on %d, in %s mode", this.config.port, process.env.NODE_ENV);
            //require("./bots");
        });
    }
}
