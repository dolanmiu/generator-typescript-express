import * as socket from "socket.io";
import * as http from "http";
import {IConfig} from "../config/environment";

export default class SocketIoFactory {
    newInstance(httpServer: http.Server): SocketIO.Server {
        
        var socketIo = socket(httpServer, {
            //serveClient: config.env !== "production",
            path: "/socket.io-client"
        });

        // socket.io (v1.x.x) is powered by debug.
        // In order to see all the debug output, set DEBUG (in server/config/local.env.js) to including the desired scope.
        //
        // ex: DEBUG: "http*,socket.io:socket"

        // We can authenticate socket.io users and access their token through socket.decoded_token
        //
        // 1. You will need to send the token in `client/components/socket/socket.service.js`
        //
        // 2. Require authentication here:
        // socketIo.use(require("socketio-jwt").authorize({
        //   secret: config.secrets.session,
        //   handshake: true
        // }));

        socketIo.on("connection", socket => {
            var address = socket.request.connection.remoteAddress + ":" + socket.request.connection.remotePort;

            socket.log = (...data) => {
                console.log(`SocketIO ${socket.nsp.name} [${address}]`, ...data);
            };

            socket.on("disconnect", () => {
            });
        });
        
        return socketIo;
    }
}