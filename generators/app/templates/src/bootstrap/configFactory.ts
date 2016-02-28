import * as socket from "socket.io";
import * as http from "http";
import {IConfig, ProductionConfig, DevelopmentConfig} from "../config/environment";

export default class SocketIoFactory {
    newInstance(nodeEnvironment: string): IConfig {
        var config;
        
        if (process.env.NODE_ENV === "production") {
            config = new ProductionConfig();
        } else {
            config = new DevelopmentConfig();
        }
        
        return config;
    }
}