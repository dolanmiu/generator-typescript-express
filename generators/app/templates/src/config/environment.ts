import {ConnectionOptions} from "mongoose";

export interface IConfig {
    port: number;
    ip: string;
    root: string;
    mongo: {
        uri: string,
        options: ConnectionOptions;
    }
}

export class DevelopmentConfig implements IConfig {
    port = 9000;
    ip = undefined;
    root = "";
    mongo = {
        uri: "mongodb://localhost/csgominigames-dev",
        options: undefined
    }
}

export class ProductionConfig implements IConfig {
    port = 80;
    ip = "0.0.0.0";
    root = "";
    mongo = {
        uri: "",
        options: undefined
    }
}