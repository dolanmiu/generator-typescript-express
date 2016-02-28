import * as http from "http";
import * as socket from "socket.io";
import {Express} from "express";
import * as mongoose from 'mongoose';
import Server from "./bootstrap/server";
import {IConfig, ProductionConfig, DevelopmentConfig} from "./config/environment";
import ApplicationFactory from "./bootstrap/applicationFactory";
import SocketIoFactory from "./bootstrap/socketIoFactory";
import ConfigFactory from "./bootstrap/configFactory";

var appFactory = new ApplicationFactory();
var socketIoFactory = new SocketIoFactory();
var configFactory = new ConfigFactory();

var config = configFactory.newInstance(process.env.NODE_ENV);
var app = appFactory.newInstance(config, "development");
var httpServer = http.createServer(app);
var socketIo = socketIoFactory.newInstance(httpServer);

// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

app.use("/thing", require("./api/thing"));

var server = new Server(config, httpServer);
server.startServer();