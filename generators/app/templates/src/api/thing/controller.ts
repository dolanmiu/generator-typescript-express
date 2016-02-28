import {RequestHandler, Request, Response} from "express";

export function index(req: Request, res: Response) {
    res.status(200).send("hello world");
};
